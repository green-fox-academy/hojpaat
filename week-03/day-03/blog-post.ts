'use strict';

class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;

  constructor (author: string, title: string, mainText: string, date:string){
    this.authorName = author;
    this.title = title;
    this.text = mainText;
    this.publicationDate = date;
  }
}

let first = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
let second = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
let third = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');

console.log(second.authorName);