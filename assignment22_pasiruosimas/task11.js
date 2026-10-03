// 11. Search with multiple filters

// Given:

// const books = [
//   { title: "JS Basics", pages: 120, tags: ["js", "beginner"] },
//   { title: "Advanced JS", pages: 350, tags: ["js", "advanced"] },
//   { title: "CSS Mastery", pages: 200, tags: ["css"] },
//   { title: "HTML & CSS", pages: 150, tags: ["html", "css", "beginner"] }
// ];

// Write a function:

// searchBooks(books, { minPages, hasTag })

// which returns books that:

//     have at least minPages pages
//     and contain the tag hasTag in their tags array

// Example:

// searchBooks(books, { minPages: 150, hasTag: "css" });

// Should return books matching both conditions.

const books = [
  { title: "JS Basics", pages: 120, tags: ["js", "beginner"] },
  { title: "Advanced JS", pages: 350, tags: ["js", "advanced"] },
  { title: "CSS Mastery", pages: 200, tags: ["css"] },
  { title: "HTML & CSS", pages: 150, tags: ["html", "css", "beginner"] },
];

function searchBooks(books, { minPages, hasTag }) {
  return books.filter((book) => {
    // jei arrow be {} tada return viduje nereikia, nes interpretuoja ji kaip auto
    return book.pages >= minPages && book.tags.includes(hasTag);
  });
}

console.log(searchBooks(books, { minPages: 150, hasTag: "css" }));
