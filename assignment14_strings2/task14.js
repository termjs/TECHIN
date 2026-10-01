// 14. Write a function strLengthSort that sorts an array of strings by how long each string is.
// Put the shortest strings first.

// Examples:
//     strLengthSort(['Apple', 'Banana', 'Cherry']) --> ['Apple', 'Cherry', 'Banana']

function strLengthSort(arr) {
  // jei ilgis lygus, sort palieka pradine tvarka (Banana pries Cherry)
  return [...arr].sort((a, b) => a.length - b.length);
}

console.log(strLengthSort(["Apple", "Banana", "Cherry"]));
console.log(strLengthSort(["Banana", "Fig", "Apple"]));
