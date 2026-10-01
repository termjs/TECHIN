// 4. Write a function removeWordsWithChar that takes 2 arguments:
//     an array of strings
//     a string of length 1 (ie: a single character)
// It should return a new array that has all of the items in the first argument
// except those that contain a character in the second argument (case-insensitive).

// Examples:
//     removeWordsWithChar(['aaa', 'bbb', 'ccc'], 'b') --> ['aaa', 'ccc']
//     removeWordsWithChar(['pizza', 'beer', 'cheese'], 'E') --> ['pizza']

function removeWordsWithChar(arr, char) {
  // abu pusiu paverciam i mazasias raides
  return arr.filter((word) => !word.toLowerCase().includes(char.toLowerCase()));
}

console.log(removeWordsWithChar(["aaa", "bbb", "ccc"], "b"));
console.log(removeWordsWithChar(["pizza", "beer", "cheese"], "E"));
