import filter from "../molecules/filter.js";

function header() {
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  if(header !== undefined){
    let newHeader = document.createElement('header');
    newHeader.innerHTML = `<h1>SearchRecipes</h1> ${filter()}`;
    body.insertAdjacentElement('afterbegin', newHeader);    
  }
}

export default header;