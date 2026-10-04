/*
Write a JavaScript function that will return the number of minutes in hours and minutes. 

Test Data :
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."
*/

import moment from "moment";

console.log("moment.js variantas");

const timeConvert1 = (minutes) => {
  const d = moment.duration(minutes, "minutes");
  const hours = d.hours();
  const mins = d.minutes();
  return `${minutes} minutes = ${hours} hour(s) and ${mins} minute(s).`;
};

console.log(timeConvert1(200));

console.log("\nJavaScript new Date()");

const timeConvert2 = (minutes) => {
  const d = new Date(minutes * 60 * 1000);
  return `${minutes} minutes = ${d.getUTCHours()} hour(s) and ${d.getUTCMinutes()} minute(s).`;
};

console.log(timeConvert2(200));
