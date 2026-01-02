
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    console.log("Division by zero"); 
    return null;
  }
  return a / b;
}

module.exports = {
  multiply,
  divide
};
