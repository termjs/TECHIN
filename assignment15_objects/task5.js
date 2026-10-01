// Write a program to display the reading status (i.e. display book name, author name and reading status) of the following books.
// const library = [
// { author: 'J.K. Rowling', title: 'Harry Potter and the Chamber of Secrets', readingStatus: true },
// { author: 'Homer', title: 'The Odyssey', readingStatus: true },
// { author: 'Harper Lee', title: 'To Kill a Mockingbird', readingStatus: false }];
// E.g. Output: Already read Harry Potter and the Chamber of Secrets by J.K. Rowling Already read The Odyssey by Homer You still need to read To Kill a Mockingbird by Harper Lee

const library = [
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Chamber of Secrets",
    readingStatus: true,
  },
  { author: "Homer", title: "The Odyssey", readingStatus: true },
  {
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    readingStatus: false,
  },
];

// lengviausias ir gereiciausias
console.log("forEach ciklas + ternary");
library.forEach((element) =>
  console.log(
    element.readingStatus
      ? `Already read ${element.title} by ${element.author}`
      : `You still need to read ${element.title} by ${element.author}`,
  ),
);
