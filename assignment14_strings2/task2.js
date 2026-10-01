// 2. Write the removeZAnimals function as described below:

// function removeZAnimals() {
//   // 1) declare an array with some strings
//   const animals = ["alligator", "zebra", "crocodile", "giraffe"];

//   // create an empty array (we will fill this with strings from the previous array)
//   let animalsWithoutZ = [];
//   // 2) loop through "animals"
//   // 3) add every item in "animals" to "animalsWithoutZ" unless the animal name contains the letter "z"
//   // 4) return "animalsWithoutZ"
// }

//     HINT: remember you can search within a string

function removeZAnimals() {
  const animals = ["alligator", "zebra", "crocodile", "giraffe"];
  let animalsWithoutZ = [];

  animals.forEach((element) => {
    if (!element.includes("z")) {
      animalsWithoutZ.push(element);
    }
  });

  return animalsWithoutZ;
}

console.log(removeZAnimals());
