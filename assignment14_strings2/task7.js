// 7. Write a function called nicer. It should clean up the language in its input sentence.
// Forbidden words include
//     heck,
//     darn,
//     dang,
//     crappy.

// Example:
//     nicer('mom get the heck in here and bring me a darn sandwich.')--> 'mom get the in here and bring me a sandwich.'

function nicer(sentence) {
  const forbidden = ["heck", "darn", "dang", "crappy"];

  // skaidom i zodzius, isfiltruojam blogus ir sujungiam atgal
  return sentence
    .split(" ")
    .filter((word) => !forbidden.includes(word.toLowerCase()))
    .join(" ");
}

console.log(nicer("mom get the heck in here and bring me a darn sandwich."));
