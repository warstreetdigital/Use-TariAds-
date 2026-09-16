/**
 * TariAds - Dedicated Discover Experience Controller
 */

document.addEventListener("DOMContentLoaded", function () {
  if (!window.TariData || !window.TariApp) return;

  const grid = document.getElementById("discoverFeedGrid");
  const countDisplay = document.getElementById("discoverMatchCount");
  const searchInput = document.getElementById("discoverSearchInput");
  const clearSearchBtn = document.getElementById("clearDiscoverSearch");

  const catChips = document.querySelectorAll(".discover-cat-chip");
  const locChips = document.querySelectorAll(".discover-loc-chip");
  const signalChips = document.querySelectorAll(".discover-signal-chip");

  let activeCategory = "all";
  let activeLocation = "all";
  let activeSignal = null;
  let searchQuery = "";

  function getAllItems() {
    const props = window.TariData.getProperties() || [];
    const vehicles = window.TariData.getVehicles() || [];
    const products = window.TariData.getProducts() || [];

    const list = [];
    props.forEach((p) => list.push({ item: p, type: "property" }));
    vehicles.forEach((v) => list.push({ item: v, type: "vehicle" }));
    products.forEach((prd) => list.push({ item: prd, type: "product" }));

    return list;
  }

  function filterAndRender() {
    if (!grid) return;

    let items = getAllItems();

    // 1. Category Filter
    if (activeCategory !== "all") {
      items = items.filter((x) => x.type === activeCategory);
    }

    // 2. Location Filter
    if (activeLocation !== "all") {
      const locTarget = activeLocation.toLowerCase();
      items = items.filter((x) => {
        const itemLoc = (x.item.location || "").toLowerCase();
        const itemSuburb = (x.item.suburb || "").toLowerCase();
        const itemCountry = (x.item.countryName || "").toLowerCase();
        return itemLoc.includes(locTarget) || itemSuburb.includes(locTarget) || itemCountry.includes(locTarget);
      });
    }

    // 3. Curated Signals Filter
    if (activeSignal) {
      if (activeSignal === "verified") {
        items = items.filter((x) => x.item.verified || x.item.agent?.verifiedAgent || x.item.seller?.verifiedSeller);
      } else if (activeSignal === "under600") {
        items = items.filter((x) => x.type === "property" && x.item.category === "rent" && x.item.price <= 600);
      } else if (activeSignal === "solar") {
        items = items.filter((x) => {
          const desc = ((x.item.description || "") + (x.item.title || "")).toLowerCase();
          const ams = (x.item.amenities || []).join(" ").toLowerCase();
          return desc.includes("solar") || desc.includes("backup") || ams.includes("solar") || x.item.features?.solar;
        });
      } else if (activeSignal === "automotive") {
        items = items.filter((x) => x.type === "vehicle" && x.item.price <= 15000);
      } else if (activeSignal === "commercial") {
        items = items.filter((x) => x.type === "property" && (x.item.category === "commercial" || (x.item.propertyType || "").toLowerCase().includes("commercial")));
      }
    }

    // 4. Live Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter((x) => {
        const it = x.item;
        const title = (it.title || "").toLowerCase();
        const loc = (it.location || "").toLowerCase();
        const sub = (it.suburb || "").toLowerCase();
        const desc = (it.description || "").toLowerCase();
        const seller = (it.agent?.name || it.agent?.agency || it.seller?.name || "").toLowerCase();
        return title.includes(q) || loc.includes(q) || sub.includes(q) || desc.includes(q) || seller.includes(q);
      });
    }

    // Update count
    if (countDisplay) {
      countDisplay.textContent = `${items.length} opportunity${items.length === 1 ? "" : "ies"} found`;
    }

    // Render cards
    if (items.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding:3.5rem 1rem; background:#FFF; border:1px solid #E2E8F0; border-radius:12px;">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="1.5" style="margin:0 auto 1rem;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <h3 style="font-size:1.2rem; font-weight:700; color:#0F172A; margin-bottom:0.5rem;">No opportunities matched this criteria</h3>
          <p style="color:#64748B; font-size:0.95rem; margin-bottom:1.5rem;">Try clearing your search query or selecting a broader location or category.</p>
          <button type="button" class="btn btn-outline btn-sm" id="resetDiscoverFilters">Reset All Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById("resetDiscoverFilters");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          activeCategory = "all";
          activeLocation = "all";
          activeSignal = null;
          searchQuery = "";
          if (searchInput) searchInput.value = "";
          if (clearSearchBtn) clearSearchBtn.style.display = "none";
          catChips.forEach((c) => c.classList.toggle("active", c.dataset.category === "all"));
          locChips.forEach((c) => c.classList.toggle("active", c.dataset.loc === "all"));
          signalChips.forEach((c) => c.classList.remove("active"));
          filterAndRender();
        });
      }
      return;
    }

    grid.innerHTML = items.map((x) => window.TariApp.renderListingPost(x.item, x.type)).join("");

    if (window.TariApp.initLucideIcons) {
      window.TariApp.initLucideIcons();
    }
  }

  // Category chip clicks
  catChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      catChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.dataset.category || "all";
      filterAndRender();
    });
  });

  // Location chip clicks
  locChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      locChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeLocation = chip.dataset.loc || "all";
      filterAndRender();
    });
  });

  // Curated signal clicks (toggleable)
  signalChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const sig = chip.dataset.signal;
      if (activeSignal === sig) {
        activeSignal = null;
        chip.classList.remove("active");
      } else {
        signalChips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        activeSignal = sig;
      }
      filterAndRender();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery ? "block" : "none";
      }
      filterAndRender();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      clearSearchBtn.style.display = "none";
      filterAndRender();
    });
  }

  // Initial render
  filterAndRender();
});
