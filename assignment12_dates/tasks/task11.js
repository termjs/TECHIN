/*
 Write a JavaScript function to get the maximum date from an array of dates.

Test Data :
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/02/02"
*/

import moment from "moment";

console.log(".sort() ir .reverse()");

const max_date1 = (dates) => {
  // rusiuojam abeceles tvarka, apverciam ir paimam pirma (nes skaiciai 0-9)
  return dates.sort().reverse()[0];
};

console.log(max_date1(["2015/02/01", "2015/02/02", "2015/01/03"]));

console.log("\n.reduce() ir moment.js .isAfter()");

const max_date2 = (dates) => {
  return dates.reduce((acc, curr) =>
    // ternary operator patikrinimas, jei true tada acc = curr, jei false tada acc = acc
    moment(curr, "YYYY/MM/DD").isAfter(moment(acc, "YYYY/MM/DD")) ? curr : acc,
  );
};

console.log(max_date2(["2015/02/01", "2015/02/02", "2015/01/03"]));

console.log("\n.map() su .max() metodu");

const max_date3 = (dates) => {
  // issivedam su map datas ir naudojant .max() randam didziausia, priskiriam nurodyta formata
  const momentDates = dates.map((d) => moment(d, "YYYY/MM/DD"));
  return moment.max(momentDates).format("YYYY/MM/DD");
};

console.log(max_date3(["2015/02/01", "2015/02/02", "2015/01/03"]));
