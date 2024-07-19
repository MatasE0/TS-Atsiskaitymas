/* ------------------------------ TASK 4 -----------------------------------
Parašykite TS funkciją, kuri priima tekstą ir grąžina skaičių susidedantį iš vienetų ir nulių tokio ilgio, kokio yra pats žodis. Skaičius visada prasideda vienetu.

Pvz.:
  "labas"   --> 10101
  "kebabas" --> 1010101
  "a"       --> 1
-------------------------------------------------------------------------- */

function skaiciuFunkcija(text: string): number {
  if (text.length === 0) return 0;
  let skaicius = "1";
  for (let i = 1; i < text.length; i++) {
    skaicius += i % 2 === 0 ? "1" : "0";
  }
  return parseInt(skaicius);
}
console.log(skaiciuFunkcija("labas"));
console.log(skaiciuFunkcija("kebabas"));
console.log(skaiciuFunkcija("a"));
console.log(skaiciuFunkcija("labaslabas"));
