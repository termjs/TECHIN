// 1. Check if a number is within a given range

// Write a program that checks if a number is within the range of an object's min and max properties.
// Examples:
//     4, { min: 0, max: 5 }) ➞ true
//     4, { min: 4, max: 5 }) ➞ true
//     4, { min: 6, max: 10 }) ➞ false
//     5, { min: 5, max: 5 }) ➞ true
//     Notes: Assume min <= max is always true.

// lengviausiai suprantamas variantas
console.log("paprasciausias variantas");

const obj = new Object();

obj.min = 0;
obj.max = 5;

console.log(4 >= obj.min && 4 <= obj.max);

obj.min = 4;
obj.max = 5;

console.log(4 >= obj.min && 4 <= obj.max);

obj.min = 6;
obj.max = 10;

console.log(4 >= obj.min && 4 <= obj.max);

obj.min = 5;
obj.max = 5;

console.log(5 >= obj.min && 5 <= obj.max);

// funkcija ir range obj, bet logika ta pati
console.log("\nmaziau rasybos");

function isInRange(num, rangeObj) {
  return num >= rangeObj.min && num <= rangeObj.max;
}

console.log(isInRange(4, { min: 0, max: 5 })); // true
console.log(isInRange(4, { min: 4, max: 5 })); // true
console.log(isInRange(4, { min: 6, max: 10 })); // false
console.log(isInRange(5, { min: 5, max: 5 })); // true
