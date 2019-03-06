'use strict';


const apiURL= 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='
const myKey = '&api-key=dKa1oyN3mDcaNcNHT7b6GGccC57GqPCG'
const searchedExpression = 'apollo+11';

let myRequest = new XMLHttpRequest();
let articlesDiv = document.getElementById('articles');

let newUl = document.createElement('ul');
newUl.setAttribute('id', 'articlesList')
articlesDiv.appendChild(newUl);

let articleList = document.getElementById('articlesList')


myRequest.open('GET', `${apiURL}${searchedExpression}${myKey}`);

myRequest.onload = () => {
  let myArticles = JSON.parse(myRequest.responseText).response.docs;
  
  for(let i = 0; i < myArticles.length; i++){
    let newArticleLi = document.createElement('li');
    let newArticleH1 = document.createElement('h1');
    newArticleH1.innerText = myArticles[i].headline.print_headline;

    let newArticleP = document.createElement('p');
    newArticleP.innerText = `${myArticles[i].headline.main} `;

    let newArticleDate = document.createElement('p');
    newArticleDate.innerText = myArticles[i].pub_date.substring(0, 10);

    let newArticleLink = document.createElement('a');
    newArticleLink.setAttribute('href', myArticles[i].web_url);
    newArticleLink.innerText = 'More...';

    newArticleP.appendChild(newArticleLink);
    newArticleLi.appendChild(newArticleH1);
    newArticleLi.appendChild(newArticleP);
    newArticleLi.appendChild(newArticleDate);
    articleList.appendChild(newArticleLi);


  }
  
  
}

myRequest.send()
