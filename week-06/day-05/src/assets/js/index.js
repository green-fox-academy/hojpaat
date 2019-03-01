'use strict';

module.exports = {
  images : [
    {path: 'assets/images/img01.jpg', desc: 'Sunset'},
    {path: 'assets/images/img02.jpg', desc: 'Grand Canyon'},
    {path: 'assets/images/img03.jpg', desc: 'Camp Cretaceous'},
    {path: 'assets/images/img04.jpg', desc: 'Timna Park'},
    {path: 'assets/images/img05.jpg', desc: 'Taknafjördur'}
  ],

  changeMainImageRight : (currentImg) => {
    let index = imagesPath.indeOf(currentImg);
    currentImg = imagesPath[index + 1];
  }

}
