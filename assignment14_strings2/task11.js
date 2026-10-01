// 11. Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
//     A => 4,
//     E => 3,
//     G => 6,
//     I => 1,
//     O => 0,
//     S => 5,
//     T => 7
// HINT: What is the best data structure to represent the substitutions?

// Examples:
//     leetspeak('Leet') --> "l337"
//     leetspeak('ORANGE') --> "0r4n63"

// objektas tinka geriausiai, nes raide yra raktas, o pakeitimas reiksme
const substitutions = {
  a: "4",
  e: "3",
  g: "6",
  i: "1",
  o: "0",
  s: "5",
  t: "7",
};

function leetspeak(str) {
  let result = "";

  for (const char of str.toLowerCase()) {
    // jei raide yra objekte, imam pakeitima, jei ne - paliekam kaip yra
    result += substitutions[char] ?? char;
  }

  return result;
}

console.log(leetspeak("Leet"));
console.log(leetspeak("ORANGE"));
