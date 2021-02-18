function card(id, title, image) {
  let cardID, cardTitle, cardImage;
  if(! image){
    cardTitle = `<h3>${title}</h3>`;
    cardImage = `<img src="../../images/placeholder.jpg">`;
  }else{
    cardTitle = `<h3>${title}</h3>`;
    cardImage = `<img src="${image}">`;
  }

  return `<div class="card">
            ${cardTitle}
            ${cardImage}
            <span>
              <a href="#detail/${id}">Meer info</a>
              <button id="next">Volgende</button>
            </span>
          </div>`;
}

async function cardTemplate(id, title, image) {
  return card(id, title, image);
}

export default cardTemplate;