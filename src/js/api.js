async function apiCall(query) {
  const request = localStorage.getItem(query);

  const key = "e5e6701e3488481c8ea8a07e2d8e4f84";
  const resultAmount = 9;  

  if(request){
    return request;
  }else if(query === "random"){
    fetch(`https://api.spoonacular.com/recipes/random?number=${resultAmount}&apiKey=${key}`)
    .then(response => response.json()).then(data => {
      localStorage.setItem(query, JSON.stringify(data));
      return data;
    });
  }else{
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&maxFat=25&number=${resultAmount}&apiKey=${key}`)
    .then(response => response.json()).then(data => {
      localStorage.setItem(query, JSON.stringify(data));
      return data;
    });
  }
}

export default apiCall;