/*
Write a JavaScript function to get time differences in months between two dates. 
Test Data :
dt1 = new Date("June 13, 2014 08:11:00"); 
dt2 = new Date("October 19, 2014 11:13:00"); 
console.log(diff_months(dt1, dt2)); 
*/

const diff_months = (date1, date2) => {
  const yearDiff = Math.abs((date1.getFullYear() - date2.getFullYear()) * 12); // metu skirtumas tarp datu
  const monthDiff = Math.abs(date1.getMonth() - date2.getMonth()); // skirtumas tarp menesiu metu viduje
  return yearDiff + monthDiff; // bendra menesiu skirtumo suma
};

console.log(
  diff_months(
    new Date("June 13, 2014 08:11:00"),
    new Date("October 19, 2014 11:13:00"),
  ),
);
