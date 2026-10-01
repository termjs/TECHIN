// 4. Write a program to get the length of a JavaScript object.

const person1 = new Object();

person1.firstName = "John";
person1.lastName = "Smith";
person1.age = 41;
person1.profession = "engineer";
person1.city = "France";

// tas pats kaip 3ia uzduotis tik .length pridet reikia
console.log(".length naudojimas ilgio gavimui");

console.log(Object.keys(person1).length);
