/*
Write a JavaScript program to calculate age. 

Test Data :
console.log(calculate_age(new Date(1982, 11, 4))); 
32
console.log(calculate_age(new Date(1962, 1, 1)));
53
*/

const calculate_age = (date) => {
  const nowDate = Date.now();
  const diffInDays = (nowDate - date) / (1000 * 60 * 60 * 24);
  return Math.floor(diffInDays / 365.25);
};

console.log(calculate_age(new Date(1982, 11, 4)));
console.log(calculate_age(new Date(1962, 1, 1)));
