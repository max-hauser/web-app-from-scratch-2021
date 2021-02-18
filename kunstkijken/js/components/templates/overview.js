import cardTemplate from "../card.js"

function overviewTemplate(data) {
  const main = document.querySelector('main');
  const artObjects = data.artObjects;
  const cardComponents = artObjects.map(object => ({"id":object.objectNumber,"title": object.title, "image": object.webImage.url}));
  cardComponents.forEach( async function(cardData) {
    const card = await cardTemplate(cardData.id, cardData.title, cardData.image);
    main.insertAdjacentHTML("afterbegin", card);
  });
}

export { overviewTemplate };