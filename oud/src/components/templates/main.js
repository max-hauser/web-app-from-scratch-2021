import header from "../organisms/header.js";

async function mainTemplate() {
  const body = document.querySelector('body');
  body.insertAdjacentHTML('beforeend', `<header>${header()}</header> <main></main>`);
}

export default mainTemplate;