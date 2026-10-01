// 8. Write a function called capitalizeAll It should take as input a sentence
// and capitalize the first letter of every word in the sentence.

// Examples:
//     capitalizeAll('hello world') --> 'Hello World'
//     capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

function capitalizeAll(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeAll("hello world"));
console.log(capitalizeAll("every day is like sunday"));
