"use strict";
function skaiciuFunkcija(text) {
    if (text.length === 0)
        return 0;
    let binaryString = '1';
    for (let i = 1; i < text.length; i++) {
        binaryString += i % 2 === 0 ? '1' : '0';
    }
    return parseInt(binaryString, 2);
}
console.log(skaiciuFunkcija("labas"));
