// 4. Is it an empty object?
// Write a program that returns true if an object is empty,
// and false if otherwise.

// Examples:
//     {} ➞ true
//     {a: 1} ➞ false

function checkObj(obj) {
  return Object.keys(obj).length > 0 ? false : true;
}

console.log(checkObj({}));
console.log(checkObj({ a: 1 }));
