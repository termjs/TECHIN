'use strict';


function countValue(array, value) {
    // TODO: parašyk sprendimą čia
}

console.log(countValue([1, 2, 3, 4, 5], 2));                  // 1
console.log(countValue([1, 2, 3, 4, 5], 17));                 // 0
console.log(countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1));     // 4
console.log(countValue([10, 10, 10, -10], 10));               // 3
console.log(countValue(['hello', 'bananas', 'hello'], 'hello'));  // 2
console.log(countValue(['hello', 'bananas', 'hello'], 'giraffe')); // 0
