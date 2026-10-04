/*
 Write a JavaScript function to get time differences in years between two dates.
Test Data :
dt1 = new Date("June 13, 2014 08:11:00"); 
dt2 = new Date("October 19, 2017 11:13:00"); 
console.log(diff_years(dt1, dt2)); 
3
*/

const diff_years = (date1, date2) => {
  const yearDiff = (date2.getFullYear() - date1.getFullYear()) * 12;
  const monthDiff = date2.getMonth() - date1.getMonth();
  const totalMonths = Math.abs(yearDiff + monthDiff);
  return Math.floor(totalMonths / 12);
};

console.log(
  diff_years(
    new Date("June 13, 2014 08:11:00"),
    new Date("October 19, 2017 11:13:00"),
  ),
);
