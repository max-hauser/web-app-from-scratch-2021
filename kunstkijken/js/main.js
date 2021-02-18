
import {initSearch, next} from "./components/templateEngine.js";

(function(){
  document.querySelector('#search').addEventListener('click', initSearch, false);
  document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'next'){
          next();
     }
 });  
})();