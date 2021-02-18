import cardTemplate from "../card.js"

function artistTemplate(data) {
  const main = document.querySelector('main');
  console.log(data);
  if(data.artObjects.length > 0){
    const artObjects = data.artObjects;
    const cardComponents = artObjects.map(object => ({"id":object.objectNumber,"title": object.title, "image": object.webImage.url}));
    cardComponents.forEach( async function(cardData) {
      const card = await cardTemplate(cardData.id, cardData.title, cardData.image);
      main.insertAdjacentHTML("afterbegin", card);
    });
  }else{
    main.innerHTML = `<div class="noResults">
                        <h3>Geen resultaten gevonden.</h3>
                        <p><a href="">Terug naar het overzicht</a></p>
                      </div>`;
  }
}

export {artistTemplate}