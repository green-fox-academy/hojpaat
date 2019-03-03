'use strict';

let images = [
  {path: 'assets/images/img01.jpg', desc: 'Sunset'},
  {path: 'assets/images/img02.jpg', desc: 'Grand Canyon'},
  {path: 'assets/images/img03.jpg', desc: 'Camp Cretaceous'},
  {path: 'assets/images/img04.jpg', desc: 'Timna Park'},
  {path: 'assets/images/img05.jpg', desc: 'Taknafjördur'},
  {path: 'assets/images/img06.jpg', desc: 'Black Beach'}
]



function changeIndex (currentIndex, indexchange){
  let newIndex = currentIndex + indexchange;
  return newIndex
}



let mainImageIndex = 0;
let mainImage = document.getElementById('mainPicture');
let leftArrow = document.getElementsByClassName('left')[0];
let rightArrow = document.getElementsByClassName('right')[0];
let thumbnailImages = document.getElementsByClassName('smallPic');


console.log(thumbnailImages.length);

for(let i = 0; i < thumbnailImages.length; i++){
  thumbnailImages[i].onclick = () => {
    mainImage.setAttribute('src', thumbnailImages[i].getAttribute('src'))
  }
}


// thumbnailImages.forEach((pic, index) => {
//     console.log(pic);

// })

rightArrow.onclick = () => {
  mainImageIndex === images.length - 1 ? mainImageIndex = 0 : mainImageIndex = changeIndex(mainImageIndex, 1);
  mainImage.setAttribute('src', images[mainImageIndex].path);
}

leftArrow.onclick = () => {
  mainImageIndex === 0 ? mainImageIndex = images.length - 1 : mainImageIndex = changeIndex(mainImageIndex, -1);
  mainImage.setAttribute('src', images[mainImageIndex].path);
}

