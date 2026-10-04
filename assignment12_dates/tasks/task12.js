/*
Write a JavaScript function to get the minimum date from an array of dates. 

Test Data :
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/01/03"
*/

import moment from "moment";

console.log(".sort() ir .reverse()");

const min_date1 = (dates) => {
  // rusiuojam abeceles tvarka, apverciam ir paimam pirma
  // kaip abeceleje rikiuojasi nuo A iki Z, taip string skaiciai rikiuojasi nuo 0 iki 9
  return dates.sort()[0];
};

console.log(min_date1(["2015/02/01", "2015/02/02", "2015/01/03"]));

console.log("\n.reduce() ir moment.js .isAfter()");

const min_date2 = (dates) => {
  return dates.reduce((acc, curr) =>
    // ternary operator patikrinimas, jei true tada acc = curr, jei false tada acc = acc
    moment(curr, "YYYY/MM/DD").isBefore(moment(acc, "YYYY/MM/DD")) ? curr : acc,
  );
};

console.log(min_date2(["2015/02/01", "2015/02/02", "2015/01/03"]));

console.log("\n.map() su .max() metodu");

const min_date3 = (dates) => {
  // issivedam su map datas ir naudojant .min() randam maziausia, priskiriam nurodyta formata
  const momentDates = dates.map((d) => moment(d, "YYYY/MM/DD"));
  return moment.min(momentDates).format("YYYY/MM/DD");
};

console.log(min_date3(["2015/02/01", "2015/02/02", "2015/01/03"]));
