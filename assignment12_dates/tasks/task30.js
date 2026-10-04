/*
Write a JavaScript function to get time differences in days between two dates.
Test Data :
dt1 = new Date("October 13, 2014 08:11:00"); 
dt2 = new Date("October 19, 2014 11:13:00"); 
console.log(diff_days(dt1, dt2));
6
*/

const diff_days = (date1, date2) =>
  Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));

console.log(
  diff_days(
    new Date("October 13, 2014 08:11:00"),
    new Date("October 19, 2014 11:13:00"),
  ),
);
