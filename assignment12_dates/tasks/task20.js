/*
Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun). 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(short_Days(dt));
"Sun"
*/

const short_Days = (date) => {
  return date.toDateString().slice(0, 3);
};
console.log(short_Days(new Date(2015, 10, 1)));
