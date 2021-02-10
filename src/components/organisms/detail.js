
import {detailInfo} from "../../js/api.js";
import page from "../molecules/detailpage.js";

async function fetchDetail(recipeID) {
  const response = await detailInfo(recipeID);
  const details = JSON.parse(response);
  return details;
}
 
async function detail(recipeID) {
  const result = await fetchDetail(recipeID);
  const details = result;
  const position = document.querySelector('main');
  position.insertAdjacentHTML('beforeend', page(details));
}

export default detail;