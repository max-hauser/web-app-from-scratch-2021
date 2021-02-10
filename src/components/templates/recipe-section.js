import recipes from "../organisms/recipes.js"; 

async function recipeSection() {
  const body = document.querySelector('body');
  body.insertAdjacentHTML('beforeend', `<section class="overview"><h2>Recepten</h2><article class="cards"></article></section>`);  
  await recipes('article');
}

export default recipeSection;