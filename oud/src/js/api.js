async function offline(){
  const offlineData = await fetch("../media/data.json")
  .then(response => response.json())
  .then(data => {return data});
  return JSON.stringify(offlineData.detail);  
}

async function apiCheck() {
  const key = "e5e6701e3488481c8ea8a07e2d8e4f84";
  const resultAmount = 9;   
  fetch(`https://api.spoonacular.com/recipes/random?number=${resultAmount}&apiKey=${key}`); 
}


async function apiCall(query) {
  console.log('dan kom ik hier')
  const request = localStorage.getItem(query);
  const key = "e5e6701e3488481c8ea8a07e2d8e4f84";
  const resultAmount = 9; 
  
  if(request || query == "offline"){
    const data = JSON.parse(request);
    if(data === null){
      offline();
    }else if(data.code == 402 || query == "offline"){
      offline();
    }else{
      return data.results;
    }
  }else{
    if(query == "random"){
      console.log('a')
      fetch(`https://api.spoonacular.com/recipes/random?number=${resultAmount}&apiKey=${key}`)
      .then(response => response.json()).then(data => {
        localStorage.setItem(query, JSON.stringify(data));
        return data;
      });      
    }else if(! parseInt(query)){
      console.log('b')
      const call = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&maxFat=25&number=${resultAmount}&apiKey=${key}`)
      .then(response => response.json()).then(data => {
        localStorage.setItem(query, JSON.stringify(data));  
        if(localStorage.getItem(query)){
          console.log('test')
          console.log(localStorage.getItem(query));
          //return localStorage.getItem(query);
        }
      });
      return localStorage.getItem(query);
    }else{
      console.log('c')
      fetch(`https://api.spoonacular.com/recipes/${query}/information?apiKey=${key}`)
      .then(response => response.json()).then(data => {
        localStorage.setItem(query, JSON.stringify(data));
        return data;
      });    
    }
  }
}

export {apiCall, apiCheck}