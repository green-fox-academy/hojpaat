'use strict';

function changeIndex (currentIndex, indexchange){
  let newIndex = currentIndex + indexchange;
  return newIndex
}

let mainImageIndex = 0;
let mainImage = document.getElementById('mainPicture');
let leftArrow = document.getElementsByClassName('left')[0];
let rightArrow = document.getElementsByClassName('right')[0];
let thumbnailImages = document.getElementsByClassName('smallPic');

let images = [];

for(let i = 0; i < thumbnailImages.length; i++){
  images.push({path: thumbnailImages[i].getAttribute('src'), desc: thumbnailImages[i].getAttribute('alt')})
}

for(let i = 0; i < thumbnailImages.length; i++){
  thumbnailImages[i].onclick = () => {
    mainImage.setAttribute('src', thumbnailImages[i].getAttribute('src'))
  }
}

rightArrow.onclick = () => {
  mainImageIndex === images.length - 1 ? mainImageIndex = 0 : mainImageIndex = changeIndex(mainImageIndex, 1);
  mainImage.setAttribute('src', images[mainImageIndex].path);
}

leftArrow.onclick = () => {
  mainImageIndex === 0 ? mainImageIndex = images.length - 1 : mainImageIndex = changeIndex(mainImageIndex, -1);
  mainImage.setAttribute('src', images[mainImageIndex].path);
}