const display = document.getElementById("display");
const buttons = document.querySelectorAll(".number, .operator");
const clearButton = document.getElementById("clear");
const calculateButton = document.getElementById("calculate");

let currentInput = "";
let previousInput = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.textContent;
    display.value = currentInput;
  });
});

clearButton.addEventListener("click", () => {
  currentInput = "";
  previousInput = "";
  operator = "";
  display.value = "";
});

calculateButton.addEventListener("click", () => {
  if (operator && previousInput !== "") {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result = 0;
    
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }

    display.value = result;
    currentInput = result.toString();
    previousInput = "";
    operator = "";
  }
});

buttons.forEach((button) => {
  if (button.classList.contains("operator")) {
    button.addEventListener("click", () => {
      if (currentInput !== "") {
        previousInput = currentInput;
        currentInput = "";
        operator = button.textContent;
      }
    });
  }
});
