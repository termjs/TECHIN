// 9. Create a “short description” for products

// Given:

// const items = [
//   { name: "Phone", description: "A very nice smartphone with good camera", price: 500 },
//   { name: "Laptop", description: "Powerful laptop for work and games", price: 1200 }
// ];

// Write a function that returns an array of strings in format:

// "Phone (500€): A very nice smartphone..."
// "Laptop (1200€): Powerful laptop for work..."

// Rules:

//     If description.length > 25, cut it and add "...".
//     Use template literals, conditions, and string methods.

const items = [
  {
    name: "Phone",
    description: "A very nice smartphone with good camera",
    price: 500,
  },
  {
    name: "Laptop",
    description: "Powerful laptop for work and games",
    price: 1200,
  },
];

const itemLen = (items) => {
  return items.map((item) => {
    let finalDescription = item.description;

    if (item.description.length > 25) {
      finalDescription = item.description.slice(0, 25).trim() + "...";
    }

    return `${item.name} (${item.price}€): ${finalDescription}`;
  });
};

console.log(itemLen(items));
