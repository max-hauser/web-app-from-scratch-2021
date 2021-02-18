async function detailpage(recept){
  console.log(recept);
  const section = document.querySelector('#recept > article');
  const overview = `<a href="index.html" class="nav">Terug naar de overzichtspagina</a>`;
  const image = `<img src="${recept.image}"  class="grid-area: sidebar;">`;
  const title = `<h1 class="grid-area: header;">${recept.title}</h1>`;
  const summary = `<p class="grid-area: main;">${recept.summary}</p>`;
  const instructions = recept.instructions;
  const ingredients = () => {
    const ingredienten = recept.extendedIngredients;
    let ul = `<ul  class="grid-area: main;">`;
    ingredienten.forEach(element => {
      ul += `<li>${element.name} ${element.measures.metric.amount} ${element.measures.metric.unitShort}</li>`;
    });
    ul += `</ul>`;
    return ul;
  };


  const template = overview + title + image + summary + instructions + ingredients();

  section.insertAdjacentHTML('beforeend', template);

}

export default detailpage;