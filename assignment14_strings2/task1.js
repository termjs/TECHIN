// 1. Write a function isVowel that takes a character (i.e. a string of length 1) as input and returns true if it is a vowel, false otherwise.
//     Useful resource: -https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//     Examples:
//         isVowel('c') --> false
//         isVowel('e') --> true
//         isVowel('A') --> true
//         isVowel(99) --> false
//         isVowel({e: "Elephant"}) --> false

function isVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];

  // jei paduotas skaicius, o ne string return false
  if (typeof char !== "string") {
    return false;
  }

  return vowels.includes(char.toLowerCase());
}

console.log(isVowel("c"));
console.log(isVowel("e"));
console.log(isVowel("A"));
console.log(isVowel(99));
console.log(isVowel({ e: "Elephant" }));
