const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#ac");
const display = document.querySelector("#display")

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
        updateDisplay(button.id);
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
        runOperation(button.id);
    });
});

clearButton.addEventListener("click", () => {
    console.log(clearButton.id);
    clearDisplay();
});

function updateDisplay (number) {
    if (display.textContent == 0 || display.textContent == "") {
        display.textContent = number
    } else {
        display.textContent += number;
    }
}

function clearDisplay () {
    display.textContent = '';
}

function runOperation (symbol) {
    // Checks if numA has a value, if not set it to the value in display. If so, set numB to the value in display.
    if (numA == null) {
        numA = display.textContent;
    } else {
        numB = display.textContent;
    }

    if (symbol == "equals" && operator != "equals") {
        clearDisplay();
        updateDisplay(operate(numA, numB, operator));
        numA = display.textContent;
    }
    operator = symbol;
}

let numA = null;
let numB = null;
let operator = "equals";

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if (b == 0) return "No";
    return a / b;
}

function operate (a, b, operator) {
    if (operator == "plus") {
        return add(a, b);
    } else if (operator == "subtract") {
        return subtract(a, b);
    } else if (operator == "multiply") {
        return multiply(a, b);
    } else if (operator == "divide") {
        return divide(a, b);
    } else {
        return "Could not calculate.";
    }
}
