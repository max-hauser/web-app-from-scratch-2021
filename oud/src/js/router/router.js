import apiCall, { apiCheck } from "../api.js"
import overview from "../../components/templates/overview.js";
import detailtemplate from "../../components/templates/detail.js";

async function routerHandler(id){

  const main = document.querySelector('main');  
  if(id.length === 0){
    main.className = '';
    main.classList.add('overview');
    location.hash = '';
    while (main.hasChildNodes()) {  
      main.removeChild(main.firstChild);
    }      
    overview();
  }else if(id.length > 6){
    main.classList.add('detail');
  }else{
    main.className = '';
    while (main.hasChildNodes()) {  
      main.removeChild(main.firstChild);
    }       
    main.classList.add('detail');
    await routie('recept/'+ `${id}`);
  }
}

routie({
  'recept/:id': async function(id){
    const main = document.querySelector('main');  
    let response = await apiCall(id); 
    if(response == undefined){
      response = await apiCall("offline");
      console.log(response)
      detailtemplate(response);
    }else{
    const recept = JSON.parse(response);
    detailtemplate(recept);
  }
  }
});    

export default routerHandler;