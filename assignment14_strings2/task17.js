// 17. You can use the map method to transform each item in an array into something else.
// map() returns a new array leaving the original array unchanged.

const numbers = [1, 2, 3];

// map grazina nauja masyva, o pradinis lieka toks pat
const doubled = numbers.map((num) => num * 2);

console.log(doubled);
console.log(numbers);
