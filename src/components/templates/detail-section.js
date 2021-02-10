import detail from "../organisms/detail.js"; 

async function recipeSection(recipe) {
  const body = document.querySelector('body');
  body.innerHTML = "";
  body.insertAdjacentHTML('beforeend', `<main></main>`);
  await detail(recipe);
}

export default recipeSection;