'use strict';
export{}


// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams (...arg: any []): any {
  for (let i: number = 0; i < arg.length; i++) {
    console.log(arg[i]);
  }
}

printParams("Hello", 3, 5, "new", true);
