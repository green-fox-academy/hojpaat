'use strict';
export{};

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

currentHours *= 60 * 60;
currentMinutes *= 60;
currentSeconds += currentHours + currentMinutes;

let allDaySeconds: number = 24 * 60 * 60;

console.log(allDaySeconds - currentSeconds);

