function ingredientList(ingredients){
  let ul = `<ul>`;
  // ingredients.forEach(ingredient => {
  //   ul += `<li>${ingredient.name} ${ingredient.measures.amount}</li>`;
  // });
  for (let index = 0; index < ingredients.length; index++) {
    const ingredient = ingredients[index];
    ul += `<li>${ingredient.name} ${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitLong}</li>`
    
  }
  ul += `</ul>`
  return ul;
}

export default ingredientList;