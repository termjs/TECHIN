// 2. Return Keys and Values
// Write a program that takes an object and returns the keys and values in separate arrays.
// Examples:
//     { a: 1, b: 2, c: 3 } ➞ ["a", "b", "c"], [1, 2, 3]
//     {key: true} ➞ ["key"], [true]

console.log("JSON.stringify() ir obj keys/values");
function keyValues(obj) {
  return `${JSON.stringify(Object.keys(obj))}, ${JSON.stringify(Object.values(obj))}`;
}

console.log(keyValues({ a: 1, b: 2, c: 3 }));
console.log(keyValues({ key: true }));

console.log("\nkeys/values, map ir join");

function keyValuesManual(obj) {
  const keys = Object.keys(obj)
    .map((k) => `"${k}"`)
    .join(", ");
  const values = Object.values(obj).join(", ");

  // Rankiniu būdu apgaubiame laužtiniais skliaustais
  return `[${keys}], [${values}]`;
}

console.log(keyValuesManual({ a: 1, b: 2, c: 3 }));
console.log(keyValuesManual({ key: true }));
