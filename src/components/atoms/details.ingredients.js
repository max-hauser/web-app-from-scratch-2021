function detailsIngredients(ingredients){
  let ul = `<ul>`;
  ingredients.forEach(ingredient => {
    ul += `<li>${ingredient.measures['metric'].amount} ${ingredient.measures['metric'].unitShort} ${ingredient.name}</li>`;
  });
  ul += `</ul>`;

  return `<h3>Ingredients</h3>` + ul;
}

export default detailsIngredients;