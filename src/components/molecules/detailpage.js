import dishTypes from  "../atoms/details-dishtype.js";
import detailImage from "../atoms/detail-image.js";
import detailRating from "../atoms/detail-rating.js"
import detailsTitle from "../atoms/details-title.js";
import detailsSummary from "../atoms/details-summary.js";
import detailsInstructions from "../atoms/details-instructions.js";
import detailsIngredients from "../atoms/details.ingredients.js";
import detailsMeta from "../atoms/details-meta.js";

function page(details) {
  console.log(details);
  return `
  <article class="detailspage">
  <main>
    ${dishTypes(details.dishTypes)}
    ${detailsTitle(details.title)}
    ${detailImage(details.image)}
    ${detailRating(details.spoonacularScore)}
    ${detailsSummary(details.summary)}
    ${detailsInstructions(details.instructions)}
    
  </main>
  <aside style="padding-top: 18vh;">
  ${detailsMeta(details.readyInMinutes, details.servings)}
  ${detailsIngredients(details.extendedIngredients)}
  </aside>
  </article>
  
  `;
}

export default page;