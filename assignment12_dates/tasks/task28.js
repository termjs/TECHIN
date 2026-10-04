/*
Write a JavaScript function to get time differences in minutes between two dates.
Test Data :
dt1 = new Date("October 13, 2014 11:11:00"); 
dt2 = new Date("October 13, 2014 11:13:00"); 
console.log(diff_minutes(dt1, dt2)); 
2
*/

const diff_minutes = (date1, date2) => (date2 - date1) / (1000 * 60);

console.log(
  diff_minutes(
    new Date("October 13, 2014 11:11:00"),
    new Date("October 13, 2014 11:13:00"),
  ),
);
