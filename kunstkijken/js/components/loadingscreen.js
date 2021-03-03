function loading(main){
  console.log(main);
  const animation = `<div class="loading"></div>`;
  main.insertAdjacentHTML("afterbegin", animation);
}

function removeLoading(){
  const loading = document.querySelector('.loading');
  loading.remove();
}

export { loading, removeLoading }