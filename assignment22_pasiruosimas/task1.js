// 1. Complex transformation with conditions

// Given:
// const temperatures = [18, 25, 30, 10, 28];

// Use map to return an array of objects:
// [
//   { temp: 18, status: "warm" },
//   { temp: 25, status: "hot" },
//   { temp: 30, status: "hot" },
//   { temp: 10, status: "cold" },
//   { temp: 28, status: "hot" }
// ]

// Rules:
//     temp < 15 → "cold"
//     temp >= 15 && temp < 25 → "warm"
//     temp >= 25 → "hot"

const temperatures = [18, 25, 30, 10, 28];

console.log(
  temperatures.map((temp) => {
    let status;
    if (temp < 15) {
      status = "cold";
    } else if (temp < 25) {
      status = "warm";
    } else {
      status = "hot";
    }

    return { temp: temp, status: status };
  }),
);
