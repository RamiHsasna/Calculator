const display = document.querySelector(".display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function operate(string) {
  let calculation = string.split(/\b\s*([+\/*-])\s*/);
  const expression = calculation[1];
  switch (expression) {
    case "*":
      display.value = parseFloat(calculation[0]) * parseFloat(calculation[2]);
      break;
    case "/":
      display.value = parseFloat(calculation[0]) / parseFloat(calculation[2]);
      break;
    case "+":
      display.value = parseFloat(calculation[0]) + parseFloat(calculation[2]);
      break;
    case "-":
      display.value = parseFloat(calculation[0]) - parseFloat(calculation[2]);
      break;
    default:
      return `Error ${string} contains an invalid operation.`;
  }
}
