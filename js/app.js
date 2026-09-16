/**
 * TariAds - Global Listings & Advertising Marketplace
 * Core Application Engine & Shared UI Components
 */

import { TariData } from "./data.js";

(function () {
  "use strict";

  const TariApp = {
    init: function () {
      this.bindGlobalEvents();
      this.updateSavedCounter();
      this.initMobileNav();
      this.initBottomNav();
      this.initLocationSelector();
      this.initPublisherModal();
      this.initLucideIcons();
    },

    bindGlobalEvents: function () {
      // Listen for saved items updates
      window.addEventListener("tariads:saved-changed", () => {
        this.updateSavedCounter();
      });

      // Global click handler for save buttons on cards
      document.addEventListener("click", (e) => {
        const saveBtn = e.target.closest(".save-card-btn");
        if (saveBtn) {
          e.preventDefault();
          e.stopPropagation();
          const id = saveBtn.dataset.id;
          if (id && window.TariData) {
            const isSaved = window.TariData.toggleSave(id);
            saveBtn.classList.toggle("is-saved", isSaved);
            saveBtn.innerHTML = isSaved
              ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
              : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;

            this.showToast(isSaved ? "Saved to your list" : "Removed from your list");
          }
        }

        // Publisher Click Handler
        const pubGroup = e.target.closest(".publisher-info-group");
        if (pubGroup) {
          e.preventDefault();
          e.stopPropagation();
          const pubData = {
            name: pubGroup.dataset.pubName || "Verified Advertiser",
            role: pubGroup.dataset.pubRole || "Business",
            location: pubGroup.dataset.pubLocation || "Harare, Zimbabwe",
            whatsapp: pubGroup.dataset.pubWhatsapp || "263772123456",
            verified: pubGroup.dataset.pubVerified === "true",
            category: pubGroup.dataset.pubCategory || "Marketplace"
          };
          this.openPublisherModal(pubData);
        }
      });
    },

    updateSavedCounter: function () {
      const counters = document.querySelectorAll(".saved-count-display");
      if (window.TariData) {
        const count = window.TariData.getSavedIds().length;
        counters.forEach((el) => {
          el.textContent = count;
          el.style.display = count > 0 ? "inline-flex" : "none";
        });
      }
    },

    initMobileNav: function () {
      const btn = document.getElementById("mobileMenuToggle");
      const drawer = document.getElementById("mobileNavDrawer");
      if (btn && drawer) {
        btn.addEventListener("click", () => {
          drawer.classList.toggle("is-open");
          const isOpen = drawer.classList.contains("is-open");
          btn.setAttribute("aria-expanded", isOpen);
        });

        // Close on link click
        drawer.querySelectorAll("a").forEach((link) => {
          link.addEventListener("click", () => drawer.classList.remove("is-open"));
        });
      }
    },

    initBottomNav: function () {
      // Auto-inject persistent mobile bottom nav if missing on the page
      if (!document.querySelector(".mobile-bottom-nav")) {
        const nav = document.createElement("nav");
        nav.className = "mobile-bottom-nav";
        nav.setAttribute("aria-label", "Mobile Bottom Navigation");
        nav.innerHTML = `
          <a href="index.html" class="bottom-nav-item" id="bnavHome">
            <svg class="bnav-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>Home</span>
          </a>
          <a href="discover.html" class="bottom-nav-item" id="bnavDiscover">
            <svg class="bnav-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
            </svg>
            <span>Discover</span>
          </a>
          <a href="categories.html" class="bottom-nav-item" id="bnavCategories">
            <svg class="bnav-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="7" height="7" x="3" y="3" rx="1"/>
              <rect width="7" height="7" x="14" y="3" rx="1"/>
              <rect width="7" height="7" x="14" y="14" rx="1"/>
              <rect width="7" height="7" x="3" y="14" rx="1"/>
            </svg>
            <span>Categories</span>
          </a>
          <a href="saved.html" class="bottom-nav-item" id="bnavSaved">
            <svg class="bnav-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
            <span>Saved</span>
            <span class="badge-count saved-count-display bnav-badge" style="display:none;">0</span>
          </a>
          <a href="post-listing.html" class="bottom-nav-item bnav-post-highlight" id="bnavPost">
            <div class="bnav-post-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </div>
            <span>Post</span>
          </a>
        `;
        document.body.appendChild(nav);
      }

      const path = window.location.pathname.toLowerCase();
      const bnavItems = document.querySelectorAll(".bottom-nav-item, .desktop-icon-nav .nav-item");
      bnavItems.forEach((item) => {
        item.classList.remove("active");
        const href = (item.getAttribute("href") || "").toLowerCase();
        if (
          (path.endsWith("/") || path.endsWith("/index.html") || path === "") && (href === "index.html" || href === "./" || href === "/")
        ) {
          item.classList.add("active");
        } else if (href && !href.startsWith("http") && href !== "index.html" && path.includes(href.replace(".html", ""))) {
          item.classList.add("active");
        }
      });
    },

    initPublisherModal: function () {
      if (document.getElementById("tariPublisherModal")) return;

      const modal = document.createElement("div");
      modal.id = "tariPublisherModal";
      modal.className = "publisher-modal-backdrop";
      modal.innerHTML = `
        <div class="publisher-modal-card" role="dialog" aria-modal="true" aria-labelledby="modalPubName">
          <div class="publisher-modal-header">
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <div class="publisher-avatar-box" id="modalPubAvatar" style="width:48px; height:48px; font-size:1.15rem;">P</div>
              <div>
                <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
                  <h3 id="modalPubName" style="font-size:1.05rem; font-weight:800; color:var(--text-main); margin:0;">PUBLISHER</h3>
                  <span id="modalPubRole" class="publisher-role-badge role-business">Business</span>
                </div>
                <div id="modalPubLocation" style="font-size:0.8rem; color:var(--text-muted); margin-top:2px;">Location</div>
              </div>
            </div>
            <button class="publisher-modal-close-btn" id="modalPubCloseBtn" aria-label="Close modal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
          <div class="publisher-modal-body">
            <div style="background-color:#EBF7F0; border:1px solid #A8DAB5; border-radius:8px; padding:0.6rem 0.85rem; display:flex; align-items:center; gap:0.5rem; font-size:0.82rem; color:#075E34;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span><strong>Verified Publisher Profile</strong> • Direct Marketplace Advertiser</span>
            </div>

            <div class="publisher-stats-row">
              <div class="publisher-stat-box">
                <div class="publisher-stat-value">Direct</div>
                <div class="publisher-stat-label">Inquiry Channel</div>
              </div>
              <div class="publisher-stat-box">
                <div class="publisher-stat-value">~15m</div>
                <div class="publisher-stat-label">Avg. Response</div>
              </div>
            </div>

            <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.5; margin-bottom:1.25rem;">
              Connect directly with this advertiser to inquire about availability, negotiate terms, or arrange an on-site viewing.
            </p>

            <div style="display:grid; grid-template-columns:1fr; gap:0.5rem;">
              <a href="#" id="modalPubWhatsAppBtn" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background-color:#25D366; border-color:#25D366; color:#FFF; justify-content:center; text-align:center;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23z"/></svg>
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      // Close events
      const closeBtn = document.getElementById("modalPubCloseBtn");
      if (closeBtn) {
        closeBtn.addEventListener("click", () => this.closePublisherModal());
      }
      modal.addEventListener("click", (e) => {
        if (e.target === modal) this.closePublisherModal();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") this.closePublisherModal();
      });
    },

    openPublisherModal: function (data) {
      const modal = document.getElementById("tariPublisherModal");
      if (!modal) return;

      const nameEl = document.getElementById("modalPubName");
      const roleEl = document.getElementById("modalPubRole");
      const locEl = document.getElementById("modalPubLocation");
      const avatarEl = document.getElementById("modalPubAvatar");
      const waBtn = document.getElementById("modalPubWhatsAppBtn");

      const pubName = data.name || "TariAds Advertiser";
      if (nameEl) nameEl.textContent = pubName.toUpperCase();
      if (roleEl) roleEl.textContent = data.role || "Advertiser";
      if (locEl) locEl.textContent = data.location || "Global Listing";
      if (avatarEl) avatarEl.textContent = pubName.charAt(0).toUpperCase();

      if (waBtn) {
        const text = encodeURIComponent(`Hi ${pubName}, I saw your listing on TariAds and would like more details.`);
        waBtn.href = `https://wa.me/${data.whatsapp || '263772123456'}?text=${text}`;
      }

      modal.classList.add("is-active");
    },

    closePublisherModal: function () {
      const modal = document.getElementById("tariPublisherModal");
      if (modal) modal.classList.remove("is-active");
    },

    openLocationSheet: function () {
      const modal = document.getElementById("tariLocationSheetModal");
      const triggerBtn = document.getElementById("openLocationSheetBtn");
      if (!modal) return;

      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      if (triggerBtn) triggerBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";

      // Reset search field
      const searchInput = document.getElementById("locationSearchInput");
      const clearBtn = document.getElementById("locationSearchClearBtn");
      const resultsSec = document.getElementById("locationSearchResultsSection");
      const defaultSec = document.getElementById("locationDefaultSections");

      if (searchInput) {
        searchInput.value = "";
        setTimeout(() => searchInput.focus(), 150);
      }
      if (clearBtn) clearBtn.style.display = "none";
      if (resultsSec) resultsSec.style.display = "none";
      if (defaultSec) defaultSec.style.display = "block";

      if (this.updateLocationSheetUI) {
        this.updateLocationSheetUI();
      }
    },

    closeLocationSheet: function () {
      const modal = document.getElementById("tariLocationSheetModal");
      const triggerBtn = document.getElementById("openLocationSheetBtn");
      if (!modal) return;

      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      if (triggerBtn) triggerBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    },

    initLocationSelector: function () {
      const self = this;
      const modal = document.getElementById("tariLocationSheetModal");
      const openBtn = document.getElementById("openLocationSheetBtn");
      const quickChangeBtn = document.getElementById("changeLocationQuickBtn");
      const pillChangeBtn = document.getElementById("discoveryCityPill");
      const closeBtn = document.getElementById("locationSheetCloseBtn");
      const searchInput = document.getElementById("locationSearchInput");
      const clearBtn = document.getElementById("locationSearchClearBtn");
      const resultsSection = document.getElementById("locationSearchResultsSection");
      const resultsList = document.getElementById("locationSearchResultsList");
      const defaultSections = document.getElementById("locationDefaultSections");
      const popularList = document.getElementById("popularLocationsList");
      const intlToggle = document.getElementById("locationIntlToggleBtn");
      const intlDropdown = document.getElementById("locationIntlDropdown");
      const intlCaret = document.getElementById("locationIntlCaret");

      if (!window.TariData) return;

      // Populate Popular Locations list
      function populatePopularLocations() {
        if (!popularList) return;
        const popularCities = window.TariData.LOCATIONS_DATA?.popularCities || [
          { id: "harare", name: "Harare", country: "ZW", countryName: "Zimbabwe", tag: "Capital / Primary Market" },
          { id: "bulawayo", name: "Bulawayo", country: "ZW", countryName: "Zimbabwe", tag: "Second City" },
          { id: "mutare", name: "Mutare", country: "ZW", countryName: "Zimbabwe", tag: "Eastern Highlands" },
          { id: "gweru", name: "Gweru", country: "ZW", countryName: "Zimbabwe", tag: "Midlands Hub" },
          { id: "chitungwiza", name: "Chitungwiza", country: "ZW", countryName: "Zimbabwe", tag: "Greater Harare" },
          { id: "masvingo", name: "Masvingo", country: "ZW", countryName: "Zimbabwe", tag: "Ancient City" },
          { id: "vicfalls", name: "Victoria Falls", country: "ZW", countryName: "Zimbabwe", tag: "Resort & Tourism Hub" }
        ];

        const activeLoc = window.TariData.getSelectedLocation();
        const activeCity = (activeLoc.name || "Harare").toLowerCase();

        popularList.innerHTML = popularCities.map((city) => {
          const isSelected = city.name.toLowerCase() === activeCity;
          return `
            <button type="button" class="location-item-btn ${isSelected ? "is-active" : ""}" data-city="${city.name}" data-country="${city.country}" data-type="city" data-id="${city.id}">
              <div class="location-item-left">
                <div class="location-item-icon-box">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div class="location-item-info">
                  <div class="location-item-name-row">
                    <span class="location-item-name">${city.name}</span>
                  </div>
                  <span class="location-item-tag">${city.tag}</span>
                </div>
              </div>
              <div class="location-item-status" data-status-city="${city.name}">
                ${isSelected ? `<div class="location-item-check"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>` : ""}
              </div>
            </button>
          `;
        }).join("");
      }

      // Update UI displays to match active location
      self.updateLocationSheetUI = function () {
        const loc = window.TariData.getSelectedLocation();
        const cityName = loc.name || "Harare";

        // Update trigger button text
        const currentText = document.getElementById("currentLocationText");
        if (currentText) currentText.textContent = cityName;

        // Update discovery feed pill text
        const pillText = document.getElementById("discoveryCityPillText");
        if (pillText) pillText.textContent = cityName;

        // Update sheet current location display
        const sheetCity = document.getElementById("sheetCurrentCityDisplay");
        if (sheetCity) sheetCity.textContent = cityName;

        const sheetSub = document.getElementById("sheetCurrentSubDisplay");
        if (sheetSub) {
          if (cityName.toLowerCase() === "harare") {
            sheetSub.textContent = "Current location / default market";
          } else if (loc.type === "country" || loc.type === "all") {
            sheetSub.textContent = "Nationwide market selection";
          } else {
            sheetSub.textContent = `Active market in ${loc.countryName || "Zimbabwe"}`;
          }
        }

        // Update active class & checkmarks across all buttons in DOM
        const allBtns = document.querySelectorAll(".location-item-btn[data-city]");
        allBtns.forEach((btn) => {
          const btnCity = btn.getAttribute("data-city");
          const isSelected = btnCity && btnCity.toLowerCase() === cityName.toLowerCase();
          btn.classList.toggle("is-active", isSelected);
          const statusBox = btn.querySelector(".location-item-status");
          if (statusBox) {
            statusBox.innerHTML = isSelected
              ? `<div class="location-item-check"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>`
              : "";
          }
        });
      };

      populatePopularLocations();
      self.updateLocationSheetUI();

      // Open triggers
      if (openBtn) {
        openBtn.addEventListener("click", (e) => {
          e.preventDefault();
          self.openLocationSheet();
        });
      }
      if (quickChangeBtn) {
        quickChangeBtn.addEventListener("click", (e) => {
          e.preventDefault();
          self.openLocationSheet();
        });
      }
      if (pillChangeBtn) {
        pillChangeBtn.addEventListener("click", (e) => {
          e.preventDefault();
          self.openLocationSheet();
        });
      }

      // Close trigger
      if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
          e.preventDefault();
          self.closeLocationSheet();
        });
      }

      // Backdrop click to close
      if (modal) {
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            self.closeLocationSheet();
          }
        });
      }

      // Keyboard Esc to close
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal && modal.classList.contains("is-open")) {
          self.closeLocationSheet();
        }
      });

      // International expansion toggle
      if (intlToggle && intlDropdown) {
        intlToggle.addEventListener("click", (e) => {
          e.preventDefault();
          const isHidden = intlDropdown.style.display === "none";
          intlDropdown.style.display = isHidden ? "flex" : "none";
          intlToggle.setAttribute("aria-expanded", isHidden ? "true" : "false");
          if (intlCaret) intlCaret.classList.toggle("is-rotated", isHidden);
        });
      }

      // Handle item selection via delegation
      if (modal) {
        modal.addEventListener("click", (e) => {
          const btn = e.target.closest(".location-item-btn[data-city]");
          if (!btn) return;

          e.preventDefault();
          const cityName = btn.getAttribute("data-city");
          const country = btn.getAttribute("data-country") || "ZW";
          const type = btn.getAttribute("data-type") || "city";
          const id = btn.getAttribute("data-id") || "";

          // Set active location in TariData
          window.TariData.setSelectedCity(cityName, country, type === "area" ? cityName : "", id);

          // Update UI immediately
          self.updateLocationSheetUI();

          // Smoothly close sheet
          self.closeLocationSheet();

          // Show feedback toast
          self.showToast(`Location set to ${cityName}`, "success");
        });
      }

      // Location Instant Search
      function highlightMatch(text, query) {
        if (!query) return text;
        const idx = text.toLowerCase().indexOf(query.toLowerCase());
        if (idx === -1) return text;
        const match = text.slice(idx, idx + query.length);
        return `${text.slice(0, idx)}<span class="location-highlight">${match}</span>${text.slice(idx + query.length)}`;
      }

      if (searchInput) {
        searchInput.addEventListener("input", (e) => {
          const q = (e.target.value || "").trim();

          if (clearBtn) {
            clearBtn.style.display = q ? "flex" : "none";
          }

          if (!q) {
            if (resultsSection) resultsSection.style.display = "none";
            if (defaultSections) defaultSections.style.display = "block";
            return;
          }

          if (defaultSections) defaultSections.style.display = "none";
          if (resultsSection) resultsSection.style.display = "block";

          const results = window.TariData.searchLocations(q);
          const activeLoc = window.TariData.getSelectedLocation();
          const activeCity = (activeLoc.name || "").toLowerCase();

          if (results.length === 0) {
            resultsList.innerHTML = `
              <div class="location-empty-search">
                <div class="location-empty-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
                <div class="location-empty-title">No locations found for "${q}"</div>
                <div class="location-empty-desc">Try searching for Harare, Mutare, Bulawayo, or Borrowdale.</div>
              </div>
            `;
            return;
          }

          resultsList.innerHTML = results.map((item) => {
            const isSelected = item.name.toLowerCase() === activeCity;
            const highlightedName = highlightMatch(item.name, q);
            const isArea = item.type === "area";

            return `
              <button type="button" class="location-item-btn ${isSelected ? "is-active" : ""}" data-city="${item.name}" data-country="${item.country}" data-type="${item.type}" data-id="${item.id}">
                <div class="location-item-left">
                  <div class="location-item-icon-box">
                    ${isArea
                      ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`
                      : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`}
                  </div>
                  <div class="location-item-info">
                    <div class="location-item-name-row">
                      <span class="location-item-name">${highlightedName}</span>
                      ${isArea ? `<span class="location-item-badge">Area / Suburb</span>` : ""}
                    </div>
                    <span class="location-item-tag">${item.subtitle || `${item.countryName}`}</span>
                  </div>
                </div>
                <div class="location-item-status" data-status-city="${item.name}">
                  ${isSelected ? `<div class="location-item-check"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>` : ""}
                </div>
              </button>
            `;
          }).join("");
        });
      }

      if (clearBtn && searchInput) {
        clearBtn.addEventListener("click", () => {
          searchInput.value = "";
          clearBtn.style.display = "none";
          if (resultsSection) resultsSection.style.display = "none";
          if (defaultSections) defaultSections.style.display = "block";
          searchInput.focus();
        });
      }

      // Backward compatibility with previous select element if present on any page
      const globalLocationSelect = document.getElementById("globalCountrySelector");
      if (globalLocationSelect) {
        const current = window.TariData.getSelectedCountry();
        globalLocationSelect.value = current;
        globalLocationSelect.addEventListener("change", (e) => {
          const val = e.target.value;
          window.TariData.setSelectedCountry(val);
        });
      }
    },

    initLucideIcons: function () {
      if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
      }
    },

    showToast: function (message, type = "success") {
      let container = document.getElementById("tariToastContainer");
      if (!container) {
        container = document.createElement("div");
        container.id = "tariToastContainer";
        container.className = "toast-container";
        document.body.appendChild(container);
      }

      const toast = document.createElement("div");
      toast.className = `toast toast-${type}`;
      toast.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
        <span>${message}</span>
      `;
      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    },

    // UNIFIED LISTING POST (Core Discovery Model)
    renderListingPost: function (item, type = "property") {
      if (type === "vehicle" || item.id?.startsWith("TAR-VEH") || item.id?.startsWith("VEH")) {
        return this.renderVehicleCard(item);
      } else if (type === "product" || item.id?.startsWith("TAR-PRD") || item.id?.startsWith("PRD")) {
        return this.renderProductCard(item);
      } else {
        return this.renderPropertyCard(item);
      }
    },

    // PROPERTY LISTING POST (Flagship)
    renderPropertyCard: function (p) {
      const isSaved = window.TariData ? window.TariData.isSaved(p.id) : false;
      const formattedPrice = window.TariData ? window.TariData.formatPrice(p.price, p.currency, p.pricePeriod) : `$${p.price}`;
      const zigGuide = window.TariData && p.country === "ZW" ? window.TariData.formatZiGGuide(p.price, p.country) : "";

      const primaryImg = p.images && p.images.length > 0
        ? p.images[0]
        : "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80";

      // Publisher Identity: Business, Agency, or Owner
      let publisherName = "GREENFIELD PROPERTIES";
      let publisherRole = "Business";
      let whatsapp = "263772123456";

      if (p.agent) {
        if (p.agent.agency && !p.agent.agency.toLowerCase().includes("direct")) {
          publisherName = p.agent.agency;
          publisherRole = "Business";
        } else if (p.agent.name) {
          publisherName = p.agent.name;
          publisherRole = p.agent.agency?.toLowerCase().includes("landlord") ? "Owner" : "Seller";
        }
        if (p.agent.whatsapp) whatsapp = p.agent.whatsapp;
      }

      const locationCity = p.suburb ? `${p.suburb}, ${p.location}` : `${p.location}`;
      const timeAgo = p.lastUpdated || "2h ago";

      // Key Specs line
      const specsList = [];
      if (p.bedrooms) specsList.push(`${p.bedrooms} Beds`);
      if (p.bathrooms) specsList.push(`${p.bathrooms} Baths`);
      if (p.features?.solar) specsList.push("Solar");
      if (p.features?.borehole) specsList.push("Borehole");
      if (p.sizeSqM) specsList.push(`${p.sizeSqM} m²`);
      if (specsList.length === 0) specsList.push(p.propertyType || "Property");
      const specsSummary = specsList.slice(0, 4).join(" • ");

      const waMsg = encodeURIComponent(`Hi ${publisherName}, I saw your property listing on TariAds: ${p.title} (${formattedPrice})`);

      return `
        <article class="listing-post-card" id="card-${p.id}">
          <!-- Publisher Identity Header -->
          <div class="post-publisher-bar">
            <div class="publisher-info-group" 
                 data-pub-name="${publisherName}" 
                 data-pub-role="${publisherRole}" 
                 data-pub-location="${locationCity}" 
                 data-pub-whatsapp="${whatsapp}" 
                 data-pub-verified="true" 
                 data-pub-category="Property"
                 title="View ${publisherName} profile">
              <div class="publisher-avatar-box">
                ${publisherName.charAt(0).toUpperCase()}
              </div>
              <div class="publisher-meta">
                <div class="publisher-name-row">
                  <span class="publisher-name">${publisherName.toUpperCase()}</span>
                  <span class="publisher-role-badge role-business">${publisherRole}</span>
                </div>
                <div class="publisher-subline">
                  <span>${locationCity}</span>
                  <span class="dot-sep">•</span>
                  <span>Property</span>
                  <span class="dot-sep">•</span>
                  <span>${timeAgo}</span>
                </div>
              </div>
            </div>

            <button class="save-card-btn ${isSaved ? "is-saved" : ""}" data-id="${p.id}" aria-label="Save Property">
              ${isSaved
                ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
                : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
              }
            </button>
          </div>

          <!-- Hero Image -->
          <div class="post-media-wrap">
            <a href="property.html?id=${p.id}" class="post-media-link" aria-label="${p.title}">
              <img class="post-hero-image" src="${primaryImg}" alt="${p.title}" loading="lazy" />
            </a>
            <div class="post-media-overlay-tags">
              <span class="post-vertical-pill flagship">Property</span>
              ${p.verified ? `
                <span class="post-vertical-pill" style="background:#075E34;">
                  ✓ Verified
                </span>
              ` : ''}
            </div>
          </div>

          <!-- Post Content -->
          <div class="post-content">
            <div class="post-price-line">
              <span class="post-price-amount">${formattedPrice}</span>
              ${zigGuide ? `<span class="card-zig-hint" style="font-size:0.75rem;">${zigGuide}</span>` : ""}
            </div>

            <h3 class="post-title">
              <a href="property.html?id=${p.id}">${p.title}</a>
            </h3>

            <div class="post-specs-row">
              <span>${specsSummary}</span>
            </div>

            <div class="post-actions-row">
              <a href="property.html?id=${p.id}" class="btn btn-outline btn-sm post-view-btn">
                View Property
              </a>
              <a href="https://wa.me/${whatsapp}?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm post-contact-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23z"/></svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </article>
      `;
    },

    // VEHICLE LISTING POST
    renderVehicleCard: function (v) {
      const isSaved = window.TariData ? window.TariData.isSaved(v.id) : false;
      const formattedPrice = window.TariData ? window.TariData.formatPrice(v.price, v.currency) : `$${v.price}`;
      const primaryImg = v.images && v.images.length > 0 ? v.images[0] : "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80";

      // Publisher Identity
      let publisherName = "HARARE AUTO HUB";
      let publisherRole = "Business";
      let whatsapp = "263774443322";

      if (v.seller) {
        if (v.seller.name) publisherName = v.seller.name;
        if (v.seller.type?.toLowerCase().includes("private")) publisherRole = "Seller";
        else if (v.seller.type?.toLowerCase().includes("dealer")) publisherRole = "Business";
        if (v.seller.whatsapp) whatsapp = v.seller.whatsapp;
      }

      const locationCity = v.suburb ? `${v.suburb}, ${v.location}` : `${v.location}`;
      const timeAgo = v.lastUpdated || "Today";

      // Specs summary
      const specsList = [];
      if (v.year) specsList.push(v.year);
      if (v.mileageKm) specsList.push(`${v.mileageKm.toLocaleString()} km`);
      if (v.transmission) specsList.push(v.transmission);
      if (v.fuel) specsList.push(v.fuel);
      const specsSummary = specsList.slice(0, 4).join(" • ");

      const waMsg = encodeURIComponent(`Hi ${publisherName}, I saw your vehicle listing on TariAds: ${v.title} (${formattedPrice})`);

      return `
        <article class="listing-post-card" id="card-${v.id}">
          <!-- Publisher Identity Header -->
          <div class="post-publisher-bar">
            <div class="publisher-info-group" 
                 data-pub-name="${publisherName}" 
                 data-pub-role="${publisherRole}" 
                 data-pub-location="${locationCity}" 
                 data-pub-whatsapp="${whatsapp}" 
                 data-pub-verified="true" 
                 data-pub-category="Vehicles"
                 title="View ${publisherName} profile">
              <div class="publisher-avatar-box" style="background:linear-gradient(135deg, #1E293B, #334155);">
                ${publisherName.charAt(0).toUpperCase()}
              </div>
              <div class="publisher-meta">
                <div class="publisher-name-row">
                  <span class="publisher-name">${publisherName.toUpperCase()}</span>
                  <span class="publisher-role-badge">${publisherRole}</span>
                </div>
                <div class="publisher-subline">
                  <span>${locationCity}</span>
                  <span class="dot-sep">•</span>
                  <span>Vehicles</span>
                  <span class="dot-sep">•</span>
                  <span>${timeAgo}</span>
                </div>
              </div>
            </div>

            <button class="save-card-btn ${isSaved ? "is-saved" : ""}" data-id="${v.id}" aria-label="Save Vehicle">
              ${isSaved
                ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
                : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
              }
            </button>
          </div>

          <!-- Hero Image -->
          <div class="post-media-wrap">
            <a href="vehicles.html?id=${v.id}" class="post-media-link" aria-label="${v.title}">
              <img class="post-hero-image" src="${primaryImg}" alt="${v.title}" loading="lazy" />
            </a>
            <div class="post-media-overlay-tags">
              <span class="post-vertical-pill">Vehicles</span>
              <span class="post-vertical-pill" style="background:#075E34;">✓ Verified</span>
            </div>
          </div>

          <!-- Post Content -->
          <div class="post-content">
            <div class="post-price-line">
              <span class="post-price-amount">${formattedPrice}</span>
            </div>

            <h3 class="post-title">
              <a href="vehicles.html?id=${v.id}">${v.title}</a>
            </h3>

            <div class="post-specs-row">
              <span>${specsSummary}</span>
            </div>

            <div class="post-actions-row">
              <a href="vehicles.html?id=${v.id}" class="btn btn-outline btn-sm post-view-btn">
                View Vehicle
              </a>
              <a href="https://wa.me/${whatsapp}?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm post-contact-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23z"/></svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </article>
      `;
    },

    // PRODUCT LISTING POST
    renderProductCard: function (prd) {
      const isSaved = window.TariData ? window.TariData.isSaved(prd.id) : false;
      const formattedPrice = window.TariData ? window.TariData.formatPrice(prd.price, prd.currency) : `$${prd.price}`;
      const primaryImg = prd.images && prd.images.length > 0 ? prd.images[0] : "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80";

      // Publisher Identity
      let publisherName = "TECHWORLD";
      let publisherRole = "Business";
      let whatsapp = "263773004455";

      if (prd.seller) {
        if (prd.seller.name) publisherName = prd.seller.name;
        if (prd.seller.type?.toLowerCase().includes("supplier") || prd.seller.type?.toLowerCase().includes("store")) {
          publisherRole = "Business";
        } else {
          publisherRole = "Seller";
        }
        if (prd.seller.whatsapp) whatsapp = prd.seller.whatsapp;
      }

      const locationCity = prd.suburb ? `${prd.suburb}, ${prd.location}` : `${prd.location}`;
      const timeAgo = prd.lastUpdated || "Yesterday";

      // Specs / Features summary
      const specsSummary = prd.features && prd.features.length > 0
        ? prd.features.slice(0, 3).join(" • ")
        : (prd.condition || "Verified Product");

      const waMsg = encodeURIComponent(`Hi ${publisherName}, I saw your product listing on TariAds: ${prd.title} (${formattedPrice})`);

      return `
        <article class="listing-post-card" id="card-${prd.id}">
          <!-- Publisher Identity Header -->
          <div class="post-publisher-bar">
            <div class="publisher-info-group" 
                 data-pub-name="${publisherName}" 
                 data-pub-role="${publisherRole}" 
                 data-pub-location="${locationCity}" 
                 data-pub-whatsapp="${whatsapp}" 
                 data-pub-verified="true" 
                 data-pub-category="Products"
                 title="View ${publisherName} profile">
              <div class="publisher-avatar-box" style="background:linear-gradient(135deg, #0284C7, #0369A1);">
                ${publisherName.charAt(0).toUpperCase()}
              </div>
              <div class="publisher-meta">
                <div class="publisher-name-row">
                  <span class="publisher-name">${publisherName.toUpperCase()}</span>
                  <span class="publisher-role-badge">${publisherRole}</span>
                </div>
                <div class="publisher-subline">
                  <span>${locationCity}</span>
                  <span class="dot-sep">•</span>
                  <span>Products</span>
                  <span class="dot-sep">•</span>
                  <span>${timeAgo}</span>
                </div>
              </div>
            </div>

            <button class="save-card-btn ${isSaved ? "is-saved" : ""}" data-id="${prd.id}" aria-label="Save Product">
              ${isSaved
                ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
                : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
              }
            </button>
          </div>

          <!-- Hero Image -->
          <div class="post-media-wrap">
            <a href="products.html?id=${prd.id}" class="post-media-link" aria-label="${prd.title}">
              <img class="post-hero-image" src="${primaryImg}" alt="${prd.title}" loading="lazy" />
            </a>
            <div class="post-media-overlay-tags">
              <span class="post-vertical-pill">Products</span>
              <span class="post-vertical-pill" style="background:#075E34;">✓ Verified</span>
            </div>
          </div>

          <!-- Post Content -->
          <div class="post-content">
            <div class="post-price-line">
              <span class="post-price-amount">${formattedPrice}</span>
            </div>

            <h3 class="post-title">
              <a href="products.html?id=${prd.id}">${prd.title}</a>
            </h3>

            <div class="post-specs-row">
              <span>${specsSummary}</span>
            </div>

            <div class="post-actions-row">
              <a href="products.html?id=${prd.id}" class="btn btn-outline btn-sm post-view-btn">
                View Product
              </a>
              <a href="https://wa.me/${whatsapp}?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm post-contact-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23z"/></svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </article>
      `;
    }
  };

  window.TariApp = TariApp;
  document.addEventListener("DOMContentLoaded", () => TariApp.init());
})();
