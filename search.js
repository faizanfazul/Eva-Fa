"use strict";
const client = algoliasearch("8YL8MB0L5I", "bb1bd030f12dbc456892feee52e77fff");
const index = client.initIndex("product");
const searchInput = document.querySelector("#search-input");
const searchResults = document.querySelector("#search-results");

searchInput.addEventListener("input", (event) => {
  const query = event.target.value;
  if (query.length >= 3) {
    index.search(query, (err, { hits } = {}) => {
      if (err) {
        console.error(err);
        return;
      }
      renderSearchResults(hits);
    });
  } else {
    clearSearchResults();
  }
});
function renderSearchResults(results) {
  searchResults.innerHTML = "";

  results.forEach((result) => {
    const resultHtml = `<div class="product" style="width: 280px; margin-top: 10px;">
                <a href="#">
                    <img src="${result.product_image}" alt="${result.product_alt}">
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
function clearSearchResults() {
  searchResults.innerHTML = "";
}
