/*
Write a JavaScript function to get the quarter (1 to 4) of the year. 

Test Data :
console.log(quarter_of_the_year(new Date(2015, 1, 21))); 
2
console.log(quarter_of_the_year(new Date(2015, 10, 18)));
4
*/

const quarter_of_the_year = (date) => {
  const month = date.getMonth(); // grazina 0-11

  const quarters = {
    0: 1,
    1: 1,
    2: 1, // Sausis, Vasaris, Kovas -> 1
    3: 2,
    4: 2,
    5: 2, // Balandis, Geguze, Birzelis -> 2
    6: 3,
    7: 3,
    8: 3, // Liepa, Rugpjutis, Rugsejis -> 3
    9: 4,
    10: 4,
    11: 4, // Spalis, Lapkritis, Gruodis -> 4
  };

  return quarters[month];
};

console.log(quarter_of_the_year(new Date(2015, 1, 21))); // turi buti 1, ne 2
console.log(quarter_of_the_year(new Date(2015, 10, 18))); // 4
