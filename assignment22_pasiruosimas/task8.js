// 8. Merge arrays of objects by id

// Given:

// const people = [
//   { id: 1, name: "Jonas" },
//   { id: 2, name: "Ona" },
//   { id: 3, name: "Petras" }
// ];

// const scores = [
//   { id: 1, score: 10 },
//   { id: 3, score: 7 },
//   { id: 2, score: 9 }
// ];

// Write a function that returns:

// [
//   { id: 1, name: "Jonas", score: 10 },
//   { id: 2, name: "Ona", score: 9 },
//   { id: 3, name: "Petras", score: 7 }
// ]

// (Assume each id exists in both arrays.)

const people = [
  { id: 1, name: "Jonas" },
  { id: 2, name: "Ona" },
  { id: 3, name: "Petras" },
];

const scores = [
  { id: 1, score: 10 },
  { id: 3, score: 7 },
  { id: 2, score: 9 },
];

const mergeArr = (people, scores) => {
  let arr = [];
  for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < scores.length; j++) {
      if (people[i].id === scores[j].id) {
        arr.push({
          id: people[i].id,
          name: people[i].name,
          score: scores[j].score,
        });
      }
    }
  }
  return arr;
};

console.log(mergeArr(people, scores));
