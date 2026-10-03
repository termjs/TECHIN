// 7. Add new property during mapping

// Given:

// const products = [
//   { title: "Phone", price: 500 },
//   { title: "Laptop", price: 1200 },
//   { title: "Tablet", price: 800 }
// ];

// Use map to return:

// [
//   { title: "Phone", price: 500, priceWithVAT: 605 },
//   { title: "Laptop", price: 1200, priceWithVAT: 1452 },
//   { title: "Tablet", price: 800, priceWithVAT: 968 }
// ]

// Assume VAT = 21%.

const products = [
  { title: "Phone", price: 500 },
  { title: "Laptop", price: 1200 },
  { title: "Tablet", price: 800 },
];

const rezultatas = products.map((preke) => {
  return {
    title: preke.title,
    price: preke.price,
    priceWithVAT: preke.price * 1.21,
  };
});

console.log(rezultatas);
