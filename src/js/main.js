import recipeSection from '../components/templates/recipe-section.js';
import detailPage from '../components/templates/detail-section.js';
import handleRoutes from '../router/router.js';
(async function () {

  handleRoutes()
  window.addEventListener('hashchange', handleRoutes)


  await recipeSection();

  const recipes = document.querySelectorAll('a');
  recipes.forEach(recipe => {
    recipe.addEventListener('click', async (event)=>{
      event.preventDefault();
      const recipeID = event.target.closest('a').getAttribute("href");
      await detailPage(recipeID);
    });
  })
}());