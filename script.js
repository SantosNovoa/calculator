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




clearBtn.addEventListener("click", () => {
  screen.textContent = "";
  currentOperator = "";
  result = 0;
  numOne = 0;
  numTwo = 0;
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
  screen.textContent = operate(currentOperator, numOne, numTwo);
})

function appendNumber(number) {
  screen.textContent += number;
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
  result = 0;
  switch (operator) {
    case "+":
      result += add(numOne, numTwo);
      screen.textContent = result;
      break;
    case "-":
      result += subtract(numOne, numTwo);
      screen.textContent = result;
      break;
    case "x":
      result += multiply(numOne, numTwo);
      screen.textContent = result;
      break;
    case "/":
      if (numTwo === 0) {
        screen.textContent = "Error.";
      } else {
        result += divide(numOne, numTwo);
        screen.textContent = result.toFixed(2);
      }
      break;
  }
  return result;
}

// operate("+", 40, 6)
// console.log(result)
// operate("-", 2, 3)
// console.log(result)
// operate("*", 2, 3)
// console.log(result)
// operate("/", 2, 3)
// console.log(result)
