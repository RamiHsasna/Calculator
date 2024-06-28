const display = document.querySelector(".display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function operate(a, b, operator) {
  let operation = 0;
  switch (operator) {
    case "+":
      operation = add(a, b);
    case "-":
      operation = substract(a, b);
    case "/":
      operation = divide(a, b);
    case "*":
      operation = multiply(a, b);
  }
  return operation;
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (a === 0 || b === 0) alert("Can't divide by 0");
  return a / b;
}
