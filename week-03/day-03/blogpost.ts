'use strict';
import { BlogPost } from './blog-post'
// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost

class Blog {
  posts: BlogPost[];

  constructor() {
    this.posts = [];
  }

  add(post: BlogPost) {
    this.posts.push(post);
  }

  del(i: number){
    this.posts.splice(i, 1);
  }

  update(i: number, text: string, date: string, author: string = this.posts[i].authorName, title: string = this.posts[i].title,){
    this.posts[i].authorName = author;
    this.posts[i].title = title;
    this.posts[i].text = text;
    this.posts[i].publicationDate = date;
  }

}

let first = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
let second = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
let third = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');

let myBlog = new Blog;

myBlog.add(first);
myBlog.add(second);
myBlog.add(third);

myBlog.update(2, 'This is a blog post', 'Today');
console.log(myBlog);
