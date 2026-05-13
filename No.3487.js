"use strict";
function solve(s, e, n) {
    if (n == 1) {
        return s == e ? s : "-1";
    }
    else {
        return s + `c`.repeat(n - 2) + e;
    }
}
const s = "q";
const e = "g";
const n = 10;
console.log(solve(s, e, n));
