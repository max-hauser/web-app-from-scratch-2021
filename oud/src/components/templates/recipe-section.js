import recipes from "../organisms/recipes.js"; 

async function recipeSection() {

  const body = document.querySelector('body');
  body.insertAdjacentHTML('beforeend', `<section id="recepten"><h2>Recepten</h2><article></article></section>`);
  body.insertAdjacentHTML('beforeend', `<section id="recept" class="hide"><article></article></section>`);  
  await recipes('article');
}

export default recipeSection;