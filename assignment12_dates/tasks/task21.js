/*
Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday). 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(long_Days(dt));
"Sunday"
*/

// https://momentjs.com/docs/#/i18n/listing-months-weekdays/

import moment from "moment";

console.log("moment.js .weekdays() variantas");

const long_Days1 = (date) => {
  return moment.weekdays(date);
};

console.log(long_Days1(new Date(2015, 10, 1)));

console.log("\nmoment.js .format() variantas");

const long_Days2 = (date) => {
  return moment(date).format("dddd"); // keturios "d" reiskia pilna pavadinima
};

console.log(long_Days2(new Date(2015, 10, 1)));

console.log("\nnew Date() variantas");

const long_Days3 = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[date.getDay()];
};

console.log(long_Days3(new Date(2015, 10, 1)));
