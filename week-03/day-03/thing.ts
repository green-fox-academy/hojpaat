class Thing {
  public name: string;
  public completed: boolean;

  constructor(name: string) {
    this.name = name;
    this.completed = false;
  }

  public complete() {
    this.completed = true;
  }
  printName() {
    console.log(this.name);
  }
}

export { Thing };