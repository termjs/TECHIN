/*
Write a JavaScript function to get time differences in weeks between two dates.
Test Data :
dt1 = new Date("June 13, 2014 08:11:00"); 
dt2 = new Date("October 19, 2014 11:13:00"); 
console.log(diff_weeks(dt1, dt2)); 
18
*/

const diff_weeks = (date1, date2) =>
  Math.floor((date2 - date1) / (1000 * 60 * 60 * 24 * 7));

console.log(
  diff_weeks(
    new Date(2014, 5, 13, 8, 11, 0), // birz 13
    new Date(2014, 9, 19, 11, 13, 0), // spal 19
  ),
);

// idk ant tiesioginio 13 mete
