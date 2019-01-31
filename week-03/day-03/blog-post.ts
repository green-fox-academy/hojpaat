
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



export{BlogPost};