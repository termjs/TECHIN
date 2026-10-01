// 18. We have an array of numbers that are stored as strings.
// Initial: [ '1', '2', '3', '4', '5' ];
// Let's transform these strings into numbers using the map method.
// Result: [ 1, 2, 3, 4, 5 ];
//     Then store the new array we created in a variable.

const strNumbers = ["1", "2", "3", "4", "5"];

// Number() pavercia string i skaiciu
const numbers = strNumbers.map((str) => Number(str));

console.log(numbers);
