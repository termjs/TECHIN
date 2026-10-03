// 5. Find the most frequent character in a string

// Write a function mostFrequentChar(str) that returns the character that appears most often in the string (ignore spaces, case-insensitive).

// Example: "Hello world" → "l"

// If there’s a tie, you can return any one of the most frequent characters.

const mostFrequentChar = (str) => {
  let charCalc = {};
  let charMax = " ";
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (currentChar === "") continue;
    if (charCalc[currentChar] === undefined) {
      charCalc[currentChar] = 1;
    } else {
      charCalc[currentChar] += 1;
    }

    if (charCalc[currentChar] > maxCount) {
      charMax = currentChar;
      maxCount = charCalc[currentChar];
    }
  }
  return charMax;
};

console.log(mostFrequentChar("Hello world".toLowerCase()));
