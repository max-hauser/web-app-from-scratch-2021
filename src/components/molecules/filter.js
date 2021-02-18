import searchbar from "../atoms/filter-searchbar.js";
import label from "../atoms/filter-label.js";
import button from "../atoms/filter-button.js";

function filter(recipe) {
  return `<div class="filter">
  ${label()}
  <span>${searchbar()}${button()}</span>
  </div>`;
}

export default filter;