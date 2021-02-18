import card from "../components/molecules/card.js";

async function filter(recipes) {
  const main = document.querySelector('main');
  while (main.hasChildNodes()) {  
    main.removeChild(main.firstChild);
  }
  if(recipes.results){
    const array = recipes.results
    array.forEach(recipe => {     
      main.insertAdjacentHTML('beforeend', card(recipe));
    }); 
  }else{
    recipes.forEach(recipe => {     
      main.insertAdjacentHTML('beforeend', card(recipe));
    }); 
  }     
}

export default filter;