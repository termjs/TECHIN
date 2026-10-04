/*
Write a JavaScript function to add specified months to a date. 
Test Data :
dt = new Date(2014,10,2);
console.log(add_months(dt, 10).toString());
Output :
"Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"
*/

const add_months = (date, months) =>
  new Date(new Date(date).setMonth(date.getMonth() + months));

console.log(add_months(new Date(2014, 10, 2), 10).toString());
