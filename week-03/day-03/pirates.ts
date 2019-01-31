class Pirate {
  name: string;
  intoxicateLevel: number;
  intoxicateOrigin: number = 0;
  inLife: boolean = true;

  constructor (name: string){
    this.name = name;
    this.intoxicateLevel = 20;
  }

  drinkSomeRum(){
    if(this.inLife === true){
      this.intoxicateLevel += 1;
    }else {
      console.log('He\'s dead');
    }
  }

  howItsGoingMate(){
    let answer1 = 'Pour me another!'
    let answer2 = 'Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?'
    if(this.inLife === false){
      console.log('He\'s dead');
    }else if (this.intoxicateLevel < 24){
      console.log(answer1)
    }else {console.log(answer2)}
  }

  die(){
    this.inLife = false;
  }

}

let blueBeard = new Pirate('Blue Beard');
blueBeard.drinkSomeRum();
blueBeard.die();
blueBeard.howItsGoingMate();