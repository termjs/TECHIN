// 10. Sort by criteria

// Given:

// const employees = [
//   { name: "Jonas", department: "IT", salary: 2000 },
//   { name: "Ona", department: "HR", salary: 1800 },
//   { name: "Petras", department: "IT", salary: 2200 },
//   { name: "Greta", department: "HR", salary: 2100 }
// ];

// Write functions to Sort:

//     Employees by department alphabetically.
//     Employees by salary descending.

// Return the sorted arrays.

const employees = [
  { name: "Jonas", department: "IT", salary: 2000 },
  { name: "Ona", department: "HR", salary: 1800 },
  { name: "Petras", department: "IT", salary: 2200 },
  { name: "Greta", department: "HR", salary: 2100 },
];

const sortEmployees = (employees) => {
  const sortByDepartment = employees
    .map((employee) => employee.department)
    .sort();
  const sortBySalary = employees
    .map((employee) => employee.salary)
    .sort((a, b) => b - a);

  return `By department: ${sortByDepartment}\nBy salary: ${sortBySalary}`;
};

console.log(sortEmployees(employees));
