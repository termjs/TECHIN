// 13. Write a function alphaSort that sorts an array of strings alphabetically.

// Examples:
//     alphaSort(['b', 'a', 'c']) --> ['a', 'b', 'c']

function alphaSort(arr) {
  // kopija su [...arr], kad nepakeistume pradinio masyvo
  return [...arr].sort((a, b) => a.localeCompare(b));
}

console.log(alphaSort(["b", "a", "c"]));
