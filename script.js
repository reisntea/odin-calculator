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

let numA;
let numB;
let operator = ``;

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
    if (operator == `+`) {
        return add(a, b);
    } else if (operator == `-`) {
        return subtract(a, b);
    } else if (operator == `*`) {
        return multiply(a, b);
    } else if (operator == `/`) {
        return divide(a, b);
    } else {
        return "Could not calculate.";
    }
}
