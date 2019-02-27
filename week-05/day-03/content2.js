// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']

// 2) change the <ul> element's background color to 'limegreen'
//   - use css class to change the color instead of the style property

var contentList = ['apple', 'banana', 'cat', 'dog'];

var listPoints = document.querySelectorAll('ul > li');

listPoints.forEach((element, index) => {
  element.innerText = contentList[index];
})

var list = document.getElementsByTagName('ul')[0];


// list.style.backgroundColor = 'limegreen';
list.setAttribute('class', 'limeBackground');

