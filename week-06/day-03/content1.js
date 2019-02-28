
    // 1)  Fill every paragraph with the last one's content.

    // 2)  Do the same again, but you should keep the cat strong.


var paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(element => element.innerText = paragraphs[paragraphs.length - 1].innerText);


paragraphs.forEach(element => element.innerHTML = paragraphs[paragraphs.length - 1].innerHTML);





