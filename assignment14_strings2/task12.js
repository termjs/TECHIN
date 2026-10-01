// 12. Write a function recognizeEmployees that takes two arguments:
//     1. an array of names of people to be recognized
//     2. an array of employees of the month
// Return an array telling everyone that they did a great job, except employees of the month did an outstanding job.

// Examples:
//     recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill'])
//         --> ['Great job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
//     recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill', 'Susan'])
//         --> ['Outstanding job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
//     recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Jennifer', 'Dylan'])
//         --> ['Great job, Susan!', 'Great job, Anthony!', 'Great job, Bill!']

function recognizeEmployees(names, employeesOfTheMonth) {
  return names.map((name) =>
    employeesOfTheMonth.includes(name)
      ? `Outstanding job, ${name}!`
      : `Great job, ${name}!`,
  );
}

console.log(recognizeEmployees(["Susan", "Anthony", "Bill"], ["Bill"]));
console.log(recognizeEmployees(["Susan", "Anthony", "Bill"], ["Bill", "Susan"]));
console.log(recognizeEmployees(["Susan", "Anthony", "Bill"], ["Jennifer", "Dylan"]));
