import { removeLoading } from "./components/loadingscreen.js";


async function getRandomArt(){
  const endpoint = 'https://www.rijksmuseum.nl/api/nl/collection/';
  const key = 'SM7rr6VN';
  const url = `${endpoint}?key=${key}`;
  return fetch (url).then(response => response.json()).then(data => {removeLoading(); return data;});      
}

async function getArtByArtist(name){
  console.log(name)
  const endpoint = 'https://www.rijksmuseum.nl/api/nl/collection', 
        key = 'SM7rr6VN',
        url = `${endpoint}?key=${key}&q=${name}`;
        return fetch (url).then(response => response.json()).then(data => {removeLoading(); return data});
}

async function getArtDetails(id){
  console.log(id)
  const endpoint = 'https://www.rijksmuseum.nl/api/nl/collection/', 
        key = 'SM7rr6VN',
        url = `${endpoint}${id}?key=${key}`;
        return fetch (url).then(response => response.json()).then(data => {removeLoading(); return data});      
}

export {getRandomArt, getArtByArtist, getArtDetails}



