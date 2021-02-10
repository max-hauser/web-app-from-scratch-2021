function detailImage(src) {
  if(!src ){
    return `<img src="../images/placeholder-image.jpg">`;
  }
  return  `<img src="${src}">`;
}

export default detailImage;