// 10. Write a function longLongVowels which is given a string,
// and returns a version of that string extending any long vowels to 5 characters.

// Examples:
//     longLongVowels('Good')--> 'Goooood'
//     longLongVowels('Cheese') --> 'Cheeeeese'
//     longLongVowels('Man') --> 'Man'

function longLongVowels(str) {
  // ([aeiou])\1 randa dvi vienodas balses is eiles, g - visus atvejus, i - nepaisant raidziu dydzio
  return str.replace(/([aeiou])\1/gi, (match) => match[0].repeat(5));
}

console.log(longLongVowels("Good"));
console.log(longLongVowels("Cheese"));
console.log(longLongVowels("Man"));
