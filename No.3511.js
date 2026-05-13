"use strict";
function powerJudge(desk, chaer, power) {
    if (desk + chaer <= power) {
        return true;
    }
    else {
        return false;
    }
}
let a = 100;
let b = 100;
let c = 100;
let d = 100;
let s = 20000;
if (powerJudge(a * c, b * d, s)) {
    console.log(`できる`);
}
else {
    console.log(`できない`);
}
