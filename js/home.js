/**
 * TariAds - Global Listings & Advertising Marketplace
 * Homepage Discovery Feed Controller
 */

document.addEventListener("DOMContentLoaded", function () {
  if (!window.TariData || !window.TariApp) return;

  const feedContainer = document.getElementById("discoveryFeedContainer");
  const searchInput = document.getElementById("feedSearchInput");

  let searchQuery = "";

  function getUnifiedFeedItems() {
    const loc = window.TariData.getSelectedLocation
      ? window.TariData.getSelectedLocation()
      : { name: "Harare", country: "ZW", type: "city" };

    const selectedCity = (loc.name || "").toLowerCase().trim();
    const isAll = selectedCity.startsWith("all ") || loc.type === "country" || loc.type === "all";
    const selectedCountry = loc.country || "ZW";

    let properties = window.TariData.getProperties() || [];
    let vehicles = window.TariData.getVehicles() || [];
    let products = window.TariData.getProducts() || [];

    // Filter by country if specified and not global ALL
    if (selectedCountry && selectedCountry !== "ALL") {
      const pF = properties.filter((p) => p.country === selectedCountry);
      if (pF.length > 0) properties = pF;
      const vF = vehicles.filter((v) => v.country === selectedCountry);
      if (vF.length > 0) vehicles = vF;
      const prdF = products.filter((p) => p.country === selectedCountry);
      if (prdF.length > 0) products = prdF;
    }

    // City & Area prioritization: surface listings matching current market first
    if (!isAll && selectedCity && selectedCity !== "all") {
      const matchesCity = (it) => {
        const itemLoc = (it.location || "").toLowerCase();
        const itemSub = (it.suburb || "").toLowerCase();
        const itemAddr = (it.address || "").toLowerCase();
        const itemTitle = (it.title || "").toLowerCase();
        return (
          itemLoc.includes(selectedCity) ||
          itemSub.includes(selectedCity) ||
          itemAddr.includes(selectedCity) ||
          itemTitle.includes(selectedCity)
        );
      };

      const pCity = properties.filter(matchesCity);
      const pOther = properties.filter((p) => !matchesCity(p));
      properties = pCity.length > 0 ? [...pCity, ...pOther] : properties;

      const vCity = vehicles.filter(matchesCity);
      const vOther = vehicles.filter((v) => !matchesCity(v));
      vehicles = vCity.length > 0 ? [...vCity, ...vOther] : vehicles;

      const prdCity = products.filter(matchesCity);
      const prdOther = products.filter((p) => !matchesCity(p));
      products = prdCity.length > 0 ? [...prdCity, ...prdOther] : products;
    }

    // Interleave with 70% Property emphasis for discovery feed:
    // Pattern: 2 Properties, 1 Vehicle or Product, 2 Properties...
    const feed = [];
    let pIdx = 0;
    let vIdx = 0;
    let prdIdx = 0;

    const maxItems = properties.length + vehicles.length + products.length;

    while (feed.length < maxItems && (pIdx < properties.length || vIdx < vehicles.length || prdIdx < products.length)) {
      // 2 properties
      if (pIdx < properties.length) {
        feed.push({ item: properties[pIdx++], type: "property" });
      }
      if (pIdx < properties.length) {
        feed.push({ item: properties[pIdx++], type: "property" });
      }
      // 1 vehicle
      if (vIdx < vehicles.length) {
        feed.push({ item: vehicles[vIdx++], type: "vehicle" });
      }
      // 1 property
      if (pIdx < properties.length) {
        feed.push({ item: properties[pIdx++], type: "property" });
      }
      // 1 product
      if (prdIdx < products.length) {
        feed.push({ item: products[prdIdx++], type: "product" });
      }
    }

    return feed;
  }

  function updateDiscoveryLocationHeader() {
    if (!window.TariData || !window.TariData.getSelectedLocation) return;
    const loc = window.TariData.getSelectedLocation();
    const pillText = document.getElementById("discoveryCityPillText");
    if (pillText) {
      pillText.textContent = loc.name || "Harare";
    }
  }

  function renderDiscoveryFeed() {
    updateDiscoveryLocationHeader();
    if (!feedContainer) return;

    let allItems = getUnifiedFeedItems();

    // Apply Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      allItems = allItems.filter((e) => {
        const it = e.item;
        const title = (it.title || "").toLowerCase();
        const loc = (it.location || "").toLowerCase();
        const sub = (it.suburb || "").toLowerCase();
        const desc = (it.description || "").toLowerCase();
        const type = (e.type || "").toLowerCase();
        const propType = (it.propertyType || "").toLowerCase();
        const make = (it.make || "").toLowerCase();
        const model = (it.model || "").toLowerCase();
        const seller = (it.agent?.name || it.agent?.agency || it.seller?.name || "").toLowerCase();
        return (
          title.includes(q) ||
          loc.includes(q) ||
          sub.includes(q) ||
          desc.includes(q) ||
          type.includes(q) ||
          propType.includes(q) ||
          make.includes(q) ||
          model.includes(q) ||
          seller.includes(q)
        );
      });
    }

    if (allItems.length === 0) {
      feedContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding:3.5rem 1rem; background:#FFF; border:1px solid #E2E8F0; border-radius:12px;">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="1.5" style="margin:0 auto 1rem;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <h3 style="font-size:1.2rem; font-weight:700; color:#0F172A; margin-bottom:0.5rem;">No matching listings found</h3>
          <p style="color:#64748B; font-size:0.95rem; margin-bottom:1.5rem;">Try adjusting your search terms or selecting a broader location.</p>
          <button type="button" class="btn btn-outline btn-sm" id="resetFeedBtn">View All Discovery Feed</button>
        </div>
      `;
      const resetBtn = document.getElementById("resetFeedBtn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          searchQuery = "";
          if (searchInput) searchInput.value = "";
          renderDiscoveryFeed();
        });
      }
      return;
    }

    feedContainer.innerHTML = allItems.map((entry) => window.TariApp.renderListingPost(entry.item, entry.type)).join("");

    // Re-init lucide icons if needed
    if (window.TariApp.initLucideIcons) {
      window.TariApp.initLucideIcons();
    }
  }

  // Live Search Input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderDiscoveryFeed();
    });
  }

  // Listen for location changes
  window.addEventListener("tariads:location-changed", () => {
    renderDiscoveryFeed();
  });

  // Initial render
  renderDiscoveryFeed();
});


