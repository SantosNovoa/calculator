console.log("hello world!")

function add(numOne, numTwo){
    return numOne + numTwo;
};

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    let num = 0;
    num = numOne / numTwo;
    let roundedNum = num.toFixed(2);
    return roundedNum;
}

