// 5) Given an array of arrays, flatten them into a single array
// function flatten(arr) {
//  // your code here
// }
// var arrays = [
//  ["1", "2", "3"],
//  [true],
//  [4, 5, 6]
// ];
// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
// Note: Take a look at Array.concat() to help with this one

function flatten1(arr) {
  return arr.reduce((acc, curr) => acc.concat(curr), []);
}
function flatten2(arr) {
  return arr.flat();
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten1(arrays));
console.log(flatten2(arrays));
