import recipeSection from '../components/templates/recipe-section.js';
import routerHandler from './router/router.js';
(async function () {
  await recipeSection();
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event)=>{
      const hash = event.target.closest('a').getAttribute('href');
      const recipeID = hash.substring(1);
      routerHandler(recipeID);
    })
  })
}());