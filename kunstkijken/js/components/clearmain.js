function clearMain() {
  const main = document.querySelector('main');
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
  
  return false;
}

export {clearMain};