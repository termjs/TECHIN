// 6. Write a function findLongestWord that takes a string of words and returns the longest word in that string.
// If there are multiple words with the same maximum length return the first longest word.

// Example:
//     findLongestWord('a book full of dogs') --> 'book'

function findLongestWord(str) {
  const words = str.split(" ");
  let longest = words[0];

  words.forEach((word) => {
    // naudojam tik >, kad lygiu ilgiu atveju liktu pirmas zodis
    if (word.length > longest.length) {
      longest = word;
    }
  });

  return longest;
}

console.log(findLongestWord("a book full of dogs"));
