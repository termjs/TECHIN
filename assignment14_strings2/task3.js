// 3. Write a function removeAnyWordWithZ that takes 1 argument: an array of strings
// It should return a new array that has all of the items in the passed-in array
// minus any words that contain the letter z or Z (case-insensitive).

function removeAnyWordWithZ(arr) {
  // pervedam zodi i mazasias raides, kad z ir Z butu tas pats
  return arr.filter((word) => !word.toLowerCase().includes("z"));
}

console.log(removeAnyWordWithZ(["zebra", "Zoo", "cat", "pizza", "dog"]));
