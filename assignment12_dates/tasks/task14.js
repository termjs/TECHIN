/*
Write a JavaScript function to get the amount of days of a year. 

Test Data :
console.log(days_of_a_year(2015)); 
365
console.log(days_of_a_year(2016));
366
*/

import moment from "moment";

console.log("moment.js .dayOfYear() metodas");

const days_of_a_year1 = (year) => {
  // privaloma nurodyti data, tiesiog YYYY neveiks
  return moment(year + "-12-31").dayOfYear();
};

console.log(days_of_a_year1(2015));
console.log(days_of_a_year1(2016));

console.log("\nmoment.js .isLeapYear() metodas");

const days_of_a_year2 = (year) => {
  // jei metuose pridedama diena
  return moment(year, "YYYY").isLeapYear() ? 366 : 365;
};

console.log(days_of_a_year2(2015));
console.log(days_of_a_year2(2016));

console.log("\nnew Date()");

const days_of_a_year3 = (year) => {
  const yearStart = new Date(year, 0, 1); // sausio 1
  const yearNext = new Date(year + 1, 0, 1); // metai + 1 sausio 1
  // gaunam milisekundes ir pasiverciam i dienas
  // viena diena turi 86,400,000 milisekundziu
  const totalDays = (yearNext - yearStart) / (1000 * 60 * 60 * 24);

  return totalDays;
};

console.log(days_of_a_year3(2015));
console.log(days_of_a_year3(2016));
