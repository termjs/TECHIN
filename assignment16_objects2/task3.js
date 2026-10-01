// 3. Scrabble
// Write a program that, given an array of scrabble tiles,
// counts the maximum score that a player can earn from the tiles in their hand.

// Example: [ { tile: "N", score: 1 },
// { tile: "K", score: 5 },
// { tile: "Z", score: 10 },
// { tile: "X", score: 8 },
// { tile: "D", score: 2 },
// { tile: "A", score: 1 },
// { tile: "E", score: 1 } ]
// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

const arr = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

// .forEach()
console.log(".forEach() ciklas");

function maxScore1(arr) {
  let score = 0;
  arr.forEach((element) => {
    score += element.score;
  });

  return score;
}

console.log(maxScore1(arr));

// .reduce()
console.log("\n.reduce() metodas");

const maxScore2 = arr.reduce((sum, item) => sum + item.score, 0);
console.log(maxScore2);
