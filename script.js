const screen = document.querySelector("span");
const clearBtn = document.querySelector(".clear-button");
const numBtns = document.querySelectorAll("[data-number");
const operatorBtns = document.querySelectorAll("[data-operator]");
const equalsBtn = document.querySelector(".equal-button")
console.log(equalsBtn)
console.log(operatorBtns);
console.log(numBtns);
console.log(clearBtn);
console.log(screen);
let numOne;
let numTwo;
let currentOperator;
let result;
let resultDisplayed = false;



clearBtn.addEventListener("click", () => {
  screen.textContent = "";
  currentOperator = "";
  result = 0;
  numOne = 0;
  numTwo = 0;
  resultDisplayed = false;
  console.log(result);
})


numBtns.forEach(button => {
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  })
})

operatorBtns.forEach(button => {
  button.addEventListener("click", () => {
    setOperator(button.textContent);
  })
})


equalsBtn.addEventListener("click", () => {
  numTwo = parseInt(screen.textContent);
  const result = operate(currentOperator, numOne, numTwo);
  screen.textContent = result;
  resultDisplayed = true;
})

function appendNumber(number) {
  if (resultDisplayed) {
  screen.textContent = number;
  resultDisplayed = false;
  } else {
    screen.textContent += number;
  }
}

function setOperator(operator) {
  numOne = parseInt(screen.textContent);
  currentOperator = operator;
  console.log(numOne);
  screen.textContent = "";
}

function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  return numOne / numTwo;
}

function operate(operator, numOne, numTwo) {
  switch (operator) {
    case "+":
      return add(numOne, numTwo);
    case "-":
      return subtract(numOne, numTwo);
    case "x":
      return multiply(numOne, numTwo);
    case "/":
      if (numTwo === 0) {
        return "Error.";
      } else {
        return divide(numOne, numTwo)
      }
  }
}

// operate("+", 40, 6)
// console.log(result)
// operate("-", 2, 3)
// console.log(result)
// operate("*", 2, 3)
// console.log(result)
// operate("/", 2, 3)
// console.log(result)
