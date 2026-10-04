/*
Write a JavaScript function to get a full textual representation of a month, such as January or June. 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(full_month(dt));
"November"
*/

import moment from "moment";

console.log("moment.js variantas");

const full_month1 = (date) => {
  return moment.months(date.getMonth());
};

console.log(full_month1(new Date(2015, 10, 1)));

console.log("\nnew Date() variantas");

const full_month2 = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[date.getMonth()];
};

console.log(full_month2(new Date(2015, 10, 1)));
