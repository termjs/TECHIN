// 2. Create a person object. Include the person's first and last name, age, job, city etc.
// Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France".

console.log("Object variantas");

const person1 = new Object();

person1.firstName = "John";
person1.lastName = "Smith";
person1.age = 41;
person1.profession = "engineer";
person1.city = "France";

console.log(
  `${person1.firstName} ${person1.lastName} is a ${person1.age} year old ${person1.profession} living in ${person1.city}`,
);

console.log("\nObject Literal variantas");

let firstName = "John";
let lastName = "Smith";
let age = 41;
let profession = "engineer";
let city = "France";

const person2 = { firstName, lastName, age, profession, city };
console.log(
  `${person2.firstName} ${person2.lastName} is a ${person2.age} year old ${person2.profession} living in ${person2.city}`,
);
