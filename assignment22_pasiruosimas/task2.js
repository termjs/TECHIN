// 2. Filter and sort products with multiple conditions

// Given:

// const products = [
//   { title: "Keyboard", price: 40, inStock: true },
//   { title: "Mouse", price: 15, inStock: false },
//   { title: "Monitor", price: 120, inStock: true },
//   { title: "USB Cable", price: 5, inStock: true }
// ];

// Write a function that:

//     Filters only products that are inStock.
//     Filters only products with price >= 10.
//     Sorts the result by price from cheapest to most expensive.
//     Returns an array of titles only.

const products = [
  { title: "Keyboard", price: 40, inStock: true },
  { title: "Mouse", price: 15, inStock: false },
  { title: "Monitor", price: 120, inStock: true },
  { title: "USB Cable", price: 5, inStock: true },
];

const result = products
  .filter((product) => product.inStock && product.price >= 10)
  .sort((a, b) => a.price - b.price)
  .map((title) => title.title);

console.log(result);
