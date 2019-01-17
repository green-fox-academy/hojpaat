'use strict';
export{};
let aSide: number = 200;
let bSide: number = 50;
let cSide: number = 20;

let surfaceAreaCuboid: number = 2* (aSide * bSide + aSide * cSide + bSide * cSide);
let volumeCuboid: number = aSide * bSide * cSide;

console.log("Surface Area: " + surfaceAreaCuboid + ".");
console.log("Volume: " + volumeCuboid + ".");