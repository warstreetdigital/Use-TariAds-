/**
 * TariAds - Saved Items & Viewing Tracker
 */

import { TariData } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  if (!window.TariData || !window.TariApp) return;

  const savedGrid = document.getElementById("savedPropertiesGrid");
  const emptyState = document.getElementById("savedEmptyState");
  const viewingList = document.getElementById("viewingRequestsList");
  const noViewingsState = document.getElementById("noViewingsState");

  function renderSaved() {
    const savedIds = window.TariData.getSavedIds();
    const allProps = window.TariData.getProperties();
    const savedProps = allProps.filter((p) => savedIds.includes(p.id));

    if (savedProps.length === 0) {
      if (savedGrid) savedGrid.style.display = "none";
      if (emptyState) emptyState.style.display = "block";
    } else {
      if (emptyState) emptyState.style.display = "none";
      if (savedGrid) {
        savedGrid.style.display = "grid";
        savedGrid.innerHTML = savedProps.map((p) => window.TariApp.renderPropertyCard(p)).join("");
      }
    }
  }

  function renderViewings() {
    const viewings = window.TariData.getViewingRequests();
    if (viewings.length === 0) {
      if (viewingList) viewingList.style.display = "none";
      if (noViewingsState) noViewingsState.style.display = "block";
    } else {
      if (noViewingsState) noViewingsState.style.display = "none";
      if (viewingList) {
        viewingList.style.display = "flex";
        viewingList.innerHTML = viewings
          .map(
            (v) => `
            <div style="background:#fff; border:1px solid #E2E8F0; border-radius:12px; padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; flex-wrap:wrap;">
              <div>
                <div style="display:inline-block; font-size:0.75rem; font-weight:700; background:#EBF7F0; color:#075E34; padding:0.2rem 0.6rem; border-radius:9999px; margin-bottom:0.4rem;">
                  Request ID: ${v.id}
                </div>
                <h4 style="font-size:1.05rem; font-weight:800; color:#0F172A; margin-bottom:0.25rem;">
                  ${v.propertyTitle || "Property Viewing"}
                </h4>
                <div style="font-size:0.85rem; color:#64748B;">
                  📍 ${v.propertyLocation || "Verified Listing"} • Contact: ${v.agentName || "Direct Lister"}
                </div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:0.9rem; font-weight:700; color:#0F172A; margin-bottom:0.25rem;">
                  🗓️ ${v.preferredDate} (${v.preferredTime || "Preferred slot"})
                </div>
                <span style="font-size:0.75rem; font-weight:700; color:#D98200; background:#FEF6E6; padding:0.2rem 0.5rem; border-radius:4px;">
                  ${v.status || "Pending Confirmation"}
                </span>
              </div>
            </div>
          `
          )
          .join("");
      }
    }
  }

  renderSaved();
  renderViewings();

  window.addEventListener("tariads:saved-changed", renderSaved);
});
