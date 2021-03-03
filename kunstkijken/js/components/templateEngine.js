import { getRandomArt, getArtByArtist, getArtDetails } from "../api.js";
import { overviewTemplate } from "./templates/overview.js";
import { detailTemplate } from "./templates/detail.js";
import { artistTemplate } from "./templates/artist.js";
import { clearMain } from "../components/clearmain.js";
import { loading } from "../components/loadingscreen.js";

const main = document.querySelector('main');

routie({
  '': () => {
    overview();
  },
  'detail/:id': id => {
    detail(id);
  }  
});

async function overview(){
  clearMain();
  loading(main);
  main.className = "overview";
  const artObjects = await getRandomArt();
  overviewTemplate(artObjects); 
}


async function detail(hash) {
  clearMain();
  loading(main);
  main.className = "detail";
  const details = await getArtDetails(hash);
  detailTemplate(details);
}

async function searchArtist(name) {
  clearMain();
  loading(main);
  main.className = "artist";
  const details = await getArtByArtist(name);
  artistTemplate(details);    
}

function initSearch(event) {
  event.preventDefault();
  const query = document.querySelector('#query').value;
  searchArtist(query);  
}

function next(){
  const cards = document.querySelectorAll('.card');
  if(cards.length >= 1){
    const allCards = Array.prototype.slice.call(cards);
    allCards[0].remove();
    if(allCards.length == 1){
      main.innerHTML = `<p>That's all folks!</p>`;
    }
  }
}

export {initSearch, next}