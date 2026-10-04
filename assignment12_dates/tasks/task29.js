/*
Write a JavaScript function to get time differences in hours between two dates.
Test Data :
dt1 = new Date("October 13, 2014 08:11:00"); 
dt2 = new Date("October 13, 2014 11:13:00"); 
console.log(diff_hours(dt1, dt2)); 
3
*/

const diff_hours = (date1, date2) =>
  Math.floor((date2 - date1) / (1000 * 60 * 60));

console.log(
  diff_hours(
    new Date("October 13, 2014 08:11:00"),
    new Date("October 13, 2014 11:13:00"),
  ),
);
