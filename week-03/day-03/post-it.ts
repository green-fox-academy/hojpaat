'use strcit';

class postIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(bColor: string, text: string, tColor: string){
    this.backgroundColor = bColor;
    this.text = text;
    this.textColor = tColor;
  }
}

let idea = new postIt('orange', 'Idea1', 'blue');
let cheers = new postIt('pink', 'Awesome', 'black')
let superb = new postIt('yellow', 'Superb', 'green');

console.log(idea);
console.log(cheers.backgroundColor);