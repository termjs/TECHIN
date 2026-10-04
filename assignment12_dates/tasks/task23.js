/*
Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12). 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(numeric_month(dt));
"11"
*/

const numeric_month = (date) => {
  return ("0" + (date.getMonth() + 1)).slice(-2);
};

console.log(numeric_month(new Date(2015, 10, 1)));
