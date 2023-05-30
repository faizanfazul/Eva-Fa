"use strict";
const client = algoliasearch("8YL8MB0L5I", "bb1bd030f12dbc456892feee52e77fff");
const index = client.initIndex("product");
const searchInput = document.querySelector("#search-input");
const searchResults = document.querySelector("#search-results");
const loading = document.querySelector("#loading-indicator");

searchInput.addEventListener("input", (event) => {
  event.preventDefault();
  const query = event.target.value;
  if (query.length === 0) {
    searchResults.style.display = "none";
    return;
  }
  if (query.length >= 2) {
    showLoadingIndicator();
    index.search(query, (err, { hits } = {}) => {
      if (err) {
        console.error(err);
        return;
      }
      renderSearchResults(hits);
      hideLoadingIndicator();
      searchResults.style.display = "flex";
    });
  }
});
function checkTitle() {
  let documentTitle = document.querySelector("title");
  if (documentTitle.textContent == "Eva Fa") {
    return "";
  } else {
    return "../";
  }
}
function renderSearchResults(results) {
  searchResults.innerHTML = "";
  if (results.length === 0) {
    const noResultsHtml = `<div class="no-results" style="font-size:1.4rem;text-transform:uppercase;color:#6a6161;">No results found</div>`;
    searchResults.insertAdjacentHTML("beforeend", noResultsHtml);
    return;
  }
  results.forEach((result) => {
    const resultHtml = `
                <style>
                .product{width: 240px;height: 240px;margin-top: 10px;margin-bottom: 10px;}
                  @media (max-width: 600px) {
                  .product{width: 45%}
                }
                </style>
          <div class="product">
                <a href="#">
                  <img src="${checkTitle() + result.product_image}" alt="${result.product_alt}">
                </a>
                <div class="about-product">
                    <a href="#same-link" class="product-name">
                        ${result.product_name}
                    </a>
                    <div class="product-price">${result.product_price}</div>
                </div>
            </div>`;
    searchResults.insertAdjacentHTML("beforeend", resultHtml);
  });
}
function showLoadingIndicator() {
  loading.style.display = "block";
}
function hideLoadingIndicator() {
  loading.style.display = "none";
}