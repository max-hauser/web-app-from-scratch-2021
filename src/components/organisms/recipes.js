import card from "../molecules/card.js";
import apiCall from "../../js/api.js";

async function fetchRecipes() {
  const query = 'fish';
  const response = await apiCall(query);
  const recipes = JSON.parse(response);
  return recipes;
}
 
async function recipes(location) {
  const result = await fetchRecipes();
  const recipes = result.results;
  const position = document.querySelector(location);

  recipes.forEach(recipe => {
    position.insertAdjacentHTML('beforeend', card(recipe));
  });
}

export default recipes;