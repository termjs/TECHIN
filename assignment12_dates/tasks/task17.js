/*
 Write a JavaScript function to convert a Unix timestamp to time.

Test Data :
console.log(Unix_timestamp(1412743274));
"6:41:14"
*/

const Unix_timestamp = (timestamp) => {
  const date = new Date(timestamp * 1000); // UNIX naudoja sekundes, paverciam i milisekundes, nes new Date() naudoja jas
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
};

console.log(Unix_timestamp(1412743274));
