// 3. Write a JavaScript program to delete the "class" property (or last property) from the previous object.

const person1 = new Object();

person1.firstName = "John";
person1.lastName = "Smith";
person1.age = 41;
person1.profession = "engineer";
person1.city = "France";

// 1 VARIANTAS: Jei triname konkrečiai pagal pavadinimą (šiuo atveju "city", nes "class" objekte nėra)
delete person1.city;

// 2 VARIANTAS: Dinamiškas paskutinės savybės ištrynimas (jei nežinome jos pavadinimo)
const keys = Object.keys(person1);
const lastKey = keys[keys.length - 1]; // Surandame paskutinį raktą (dabar tai būtų "profession")
delete person1[lastKey]; // Ištriname jį iš objekto

console.log(person1);
// Rezultatas: { firstName: 'John', lastName: 'Smith', age: 41 }
