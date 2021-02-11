import apiCall from "../api.js"
import detailpage from "../../components/templates/detail-page.js";

async function routerHandler(id){
  routie(`recept/${id}`)
  const sectionRecepten = document.querySelector('#recepten');
  const sectionRecept = document.querySelector('#recept');
  sectionRecepten.classList.add('hide');
  sectionRecept.classList.remove('hide');
}

routie('recept/:id', async function(id) {
  console.log(id);
  // doe een fetch call naar het gerecht met het id
  const response = await apiCall(id);  
  const recept = JSON.parse(response);
  detailpage(recept);
});

export default routerHandler;