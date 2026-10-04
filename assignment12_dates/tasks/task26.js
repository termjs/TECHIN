/*
Write a JavaScript function to add specified weeks to a date. 
Test Data :
dt = new Date(2014,10,2); 
console.log(add_weeks(dt, 10).toString());
Output :
"Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"
*/

const add_weeks = (date, weeks) => {
  const result = new Date(date);
  result.setDate(result.getDate() + weeks * 7);
  return result;
};

console.log(add_weeks(new Date(2014, 10, 2), 10).toString());
