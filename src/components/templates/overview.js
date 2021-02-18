import recipes from "../organisms/recipes.js";
async function overview() {
  document.querySelector('main').classList.add('overview');
  recipes('main');
}
export default overview;