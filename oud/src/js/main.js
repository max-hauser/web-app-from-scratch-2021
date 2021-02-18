import routerHandler from './router/router.js';
import header from '../components/organisms/header.js';
import apiCall, { apiCheck } from './api.js';
import filter from '../js/filter.js';



(async function () {
  header();
  const check = await apiCheck();
  console.log(check);
  document.querySelector('#filterBtn').addEventListener('click',async ()=>{
    const input = document.querySelector('#input').value;
    if(input.length > 0){
      const result = await apiCall(input);
      console.log(result);
      if(result == undefined){
        console.log(input);
      }else{
        filter(result);
      }
    }
  })
  window.addEventListener("hashchange", routerHandler(location.hash))
  window.addEventListener("click", (event)=> {
    if(event.target.closest('a')){
      event.preventDefault();
      routerHandler(event.target.closest('a').getAttribute('href'));
    }
  })
}());