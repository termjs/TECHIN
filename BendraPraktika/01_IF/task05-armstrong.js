"use strict";


const skaicius = Number(prompt("Įveskite 3 skaitmenų skaičių:"));
const simtai = Math.floor(skaicius / 100);
const desimtys = Math.floor((skaicius % 100) / 10);
const vienetai = skaicius % 10;
const suma = simtai ** 3 + desimtys ** 3 + vienetai ** 3;

// TODO: panaudok if / else / switch / ciklą pagal užduotį.
