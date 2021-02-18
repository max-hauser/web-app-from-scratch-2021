import card from "../molecules/card.js";
import apiCall from "../../js/api.js";

async function fetchRecipes() {
  const query = "random";
  if(localStorage.random){
    return JSON.parse(localStorage.random);
  }
  const request = apiCall(query);
  console.log(localStorage);
  console.log(request); 
  if(localStorage.getItem('random')){
    return localStorage.getItem('random');
  } 
  return localStorage;
}
 
async function recipes(location) {
  const result = await fetchRecipes();
  const recipes = result.recipes;
  const position = document.querySelector(location);
  recipes.forEach(recipe => {
    position.insertAdjacentHTML('beforeend', card(recipe));
  });
}

export default recipes;