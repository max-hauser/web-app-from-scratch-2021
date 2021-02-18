import cardimage from "../atoms/card-image.js";
import cardtitle from "../atoms/card-title.js";
import cardcontent from "../atoms/card-content.js";

function card(recipe) {
  return `<a href="${recipe.id}">
    ${cardimage(recipe.image)}
    ${cardtitle(recipe.title)}
    ${cardcontent(recipe.readyInMinutes, recipe.servings)}
  </a>`;
}

export default card;