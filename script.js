const screen = document.querySelector("span");
const clearBtn = document.querySelector(".clear-button");
const numBtns = document.querySelectorAll("[data-number");
const operatorBtns = document.querySelectorAll("[data-operator]");
console.log(operatorBtns);
console.log(numBtns);
console.log(clearBtn);
console.log(screen);
let numOne;
let numTwo;
let operator;
let result;

clearBtn.addEventListener("click", () => {
  screen.textContent = ""
  result = 0;
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

function appendNumber(number) {
  screen.textContent += number;
}

function setOperator(operator) {
  screen.textContent += operator;
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
    case "*":
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
