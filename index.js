// index.js

function addNumbers(a, b) {
//   console.log("Adding numbers"); 
  return a + b;
}

function subtractNumbers(a, b) {
  return a - b;
}

const result = addNumbers(5, 3);
// console.log("Result:", result);

module.exports = {
  addNumbers,
  subtractNumbers
};
