function title(title) {
  return `<h1>${title}</h1>`;
}

function image(src) {
  return `<img src="${src}">`;
}

function description(text, fallback) {
  if(text === null){
    return `<div class="description"><h3>Omschrijving</h3><p>${fallback}</p></div>`;
  }else{
    return `<div class="description"><h3>Omschrijving</h3><p>${text}</p></div>`;
  }
}

function meta(artist, year) {
  return `<div class="meta"><h3>Meta</h3><p>${artist} | ${year}</p></div>`;
}

function detailTemplate(data) {
  const artObject = data.artObject;
  console.log(artObject);
  const main = document.querySelector('main');
  main.insertAdjacentHTML("afterbegin", `
  ${title(artObject.title)}
  ${image(artObject.webImage.url)}
  ${description(artObject.description, artObject.label.description)}
  ${meta(artObject.principalOrFirstMaker, artObject.dating.sortingDate)}
  `);
}

export {detailTemplate}