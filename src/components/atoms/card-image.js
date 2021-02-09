function cardimage(src) {
  if(!src ){
    console.log("oh no");
    return `<img src="../images/placeholder-image.jpg">`;
  }
  return  `<img src="${src}">`;
}

export default cardimage;