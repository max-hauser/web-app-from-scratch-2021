import ingredientList from "../atoms/detail-ingredients.js";

async function detailtemplate(recept) {
  console.log(recept)
  const main = document.querySelector('main');
  main.insertAdjacentHTML('beforeend',`
    <a href="" class="home">&#8249; Alle recepten</a>
    <section>
      <h2>${recept.title}</h2>
      <article>
        <div class="image">
          <img src="${recept.image}">
        </div>  
        <div class="summary">
          <h3>Summary</h3>
          <p>${recept.summary}</p>
        </div>
        <div class="instructions">
        <h3>Instructions</h3>
        ${recept.instructions}
        </div>
        <div class="ingredients">
        <h3>Ingredients</h3>
            ${ingredientList(recept.extendedIngredients)}
        </div>
      </article>
    </section>`);
}
export default detailtemplate;