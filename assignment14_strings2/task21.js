// 21. Use the map method on the daysOfWeek array, creating a new array of abbreviated week days.
//     Each abbreviated string should be the first three letters of the long version in daysOfWeek.
//     Store the new array in the variable abbreviatedDays.
// Initial: const daysOfWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
// Result: const daysOfWeek = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// slice(0, 3) paima pirmas tris raides
const abbreviatedDays = daysOfWeek.map((day) => day.slice(0, 3));

console.log(abbreviatedDays);
