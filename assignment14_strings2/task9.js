// 9. Write a function called split that does the same thing as String.split
// It should take two inputs:
//     a string and
//     a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer .split() and write your own.

// Examples:
//     split('a-b-c', '-') --> ['a', 'b', 'c']
//     split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
//     split('xyz', 'r') --> ['xyz']

function split(str, delimiter) {
  const result = [];
  let current = "";
  let i = 0;

  // jei skirtukas tuscias, kiekviena raide yra atskiras elementas
  if (delimiter === "") {
    for (const char of str) {
      result.push(char);
    }
    return result;
  }

  while (i < str.length) {
    // tikrinam ar nuo pozicijos i prasideda skirtukas
    if (str.slice(i, i + delimiter.length) === delimiter) {
      result.push(current);
      current = "";
      i += delimiter.length;
    } else {
      current += str[i];
      i++;
    }
  }

  // paskutinis gabalas nepatenka i cikla, todel pridedam cia
  result.push(current);

  return result;
}

console.log(split("a-b-c", "-"));
console.log(split("APPLExxBANANAxxCHERRY", "xx"));
console.log(split("xyz", "r"));
