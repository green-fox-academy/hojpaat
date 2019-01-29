class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string){
      this.name = name;
  }

  public complete() {
      this.completed = true;
  }
}

export { Thing };

let test1 = new Thing('test1');
console.log(test1);
