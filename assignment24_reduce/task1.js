// Use the built-in .reduce() method on arrays to solve all of these
// problems
// Feel free to copy and paste the code for easy testing.
// 1) Turn an array of numbers into a total of all the numbers
// function total(arr) {
//  // your code here
// }
// console.log(total([1,2,3])); // 6

function total(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}
console.log(total([1, 2, 3])); // 6
