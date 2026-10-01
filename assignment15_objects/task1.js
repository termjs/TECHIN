// 1. Write a program to list the properties of an object. E.g. const student = { firstName: "John", lastName: "Smith", class: 12 };
// Expected Output: firstName, lastName, class

// Pirmas variantas, geriausia praktika .join()
console.log(".join() metodas, best practice");

const student = { firstName: "John", lastName: "Smith", class: 12 };
console.log(Object.keys(student).join(", "));

// Antras variantas (ciklas + .replaceAll())
// sitai uzd tinka, nes keys neturi papildomu tarpu
// letesnis variantas pagal performance

console.log("\n.forEach() ciklas + .replaceAll()");

let combineKeys = "";

Object.keys(student).forEach((key) => {
  combineKeys += ` ${key}`;
});

console.log(combineKeys.trim().replaceAll(" ", ", "));
