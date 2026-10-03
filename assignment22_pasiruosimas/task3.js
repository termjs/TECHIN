// 3. Parse CSV string into array of objects

// Given a CSV string:

// const input = "name,age,city\nJonas,25,Vilnius\nOna,30,Kaunas\nPetras,22,Klaipeda";

// Write a function that returns:

// [
//   { name: "Jonas", age: 25, city: "Vilnius" },
//   { name: "Ona", age: 30, city: "Kaunas" },
//   { name: "Petras", age: 22, city: "Klaipeda" }
// ]

// Use string methods, arrays, and objects (no libraries).

const input =
  "name,age,city\nJonas,25,Vilnius\nOna,30,Kaunas\nPetras,22,Klaipeda";

function parseCSV(csvString) {
  const reiksmes = csvString.split("\n");
  const sablonas = reiksmes.shift().split(",");

  return reiksmes.map((row) => {
    let obj = {};
    const rowValues = row.split(",");

    for (let i = 0; i < sablonas.length; i++) {
      const key = sablonas[i];
      const value = rowValues[i];
      obj[key] = value;

      if (key === "age") {
        obj[key] = Number(value);
      } else {
        obj[key] = value;
      }
    }
    return obj;
  });
}

console.log(parseCSV(input));
