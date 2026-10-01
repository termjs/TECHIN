// 20. Turn this list of numbers into price strings with two digits and a dollar sign at the beginning.
// Initial: [5, 4.23, 6.4, 8.09, 3.20];
// Dont forget to:
//     Turn the numbers into strings
//     Concatenate/ add the dollar sign
//     Make the prices have decimals
//     Store the new array we created in a variable
// Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ];

const prices = [5, 4.23, 6.4, 8.09, 3.2];

// toFixed(2) grazina string su dviem skaiciais po kablelio
const priceStrings = prices.map((price) => "$" + price.toFixed(2));

console.log(priceStrings);
