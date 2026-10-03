// 4. Unique values from array of objects

// Given:

// const posts = [
//   { id: 1, tags: ["js", "web", "frontend"] },
//   { id: 2, tags: ["js", "node", "backend"] },
//   { id: 3, tags: ["css", "design", "frontend"] }
// ];

// Create a function that returns an array of unique tags, sorted alphabetically:

// ["backend", "css", "design", "frontend", "js", "node"]

const posts = [
  { id: 1, tags: ["js", "web", "frontend"] },
  { id: 2, tags: ["js", "node", "backend"] },
  { id: 3, tags: ["css", "design", "frontend"] },
];

const postSort = (posts) => {
  let arr = [];
  for (let i = 0; i < posts.length; i++) {
    for (let j = 0; j < posts[i].tags.length; j++) {
      if (!arr.includes(posts[i].tags[j])) {
        arr.push(posts[i].tags[j]);
      }
    }
  }
  return arr.sort();
};

console.log(postSort(posts));
