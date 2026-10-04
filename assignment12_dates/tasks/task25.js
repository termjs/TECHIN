/*
Write a JavaScript function to add specified years to a date. 
Test Data :
dt = new Date(2014,10,2); 
console.log(add_years(dt, 10).toString());
Output :
"Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"
*/

const add_years = (date, years) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return new Date(year + years, month, day);
};

console.log(add_years(new Date(2014, 10, 2), 10).toString());
