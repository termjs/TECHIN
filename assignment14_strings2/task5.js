// 5. Write a function reverse that computes the reversal of a string.

// Example:
//     reverse("skoob") --> "books"

function reverse(str) {
  // einam nuo galo i prieki ir lipdom raides
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverse("skoob"));

// trumpesnis variantas su split, reverse ir join
console.log("\ntrumpesnis variantas");

const reverse2 = (str) => str.split("").reverse().join("");

console.log(reverse2("skoob"));
