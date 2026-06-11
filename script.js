// ADD AN ALL CLEAR BUTTON AND A NEGATIVE BUTTON

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearAllButton = document.querySelector("#ac");
const display = document.querySelector("#display")

let numA = null;
let numB = null;
let operator = "";
let lastUsedOperator = "";

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        runNumber(button.id);
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        runOperation(button.id);
    });
});

clearAllButton.addEventListener("click", () => {
    restart();
    clearDisplay();
});

// Should update number and then display that number. So it first displays numA and as you press numbers numA updates. 
// Then when an operator is pressed it should check for that and then display numB.

// If there is no valid operator or none at all, this updates numA. And sets numB to be nothing.
// If a valid operator was pressed this updates numB.
// For either, check if there is no value so 0 or null.
// If so, allow the negative sign to be pressed.
function runNumber (number) {
    if (number == "negative") {
        if (display.textContent == 0 || display.textContent == "") {
            numA = "-0";
            display.textContent = numA;
            return;
        }
        return;
    }
    if (operator == "" || operator == "equals") {
        if (numA == null) numA = 0;
        numA = Number(`${numA}` + number);
        display.textContent = numA;
    }  else {
        if (numB == null) numB = 0;
        numB = Number(`${numB}` + number);
        display.textContent = numB;
        return;
    }
    if (numA != null && numB != null) {
        restart();
        if (numA == null) numA = 0;
        numA = Number(`${numA}` + number);
        display.textContent = numA;
    }
}

// Ex. numA gets typed, and then an operator is pressed. So now updateDisplay should update numB
// Then an operator is pressed again, since there's numA and numB and an operator, stuff gets done.

// Ex. numA gets typed, and then an equal is pressed. Since there's no numB, do nothing.

// Ex numA gets typed, then an operator is pressed, then numB gets typed. Then equals is pressed. So numA becomes the calculation and numB and operator stay the same.
// Then equals is pressed again, so do the operation again with the new numA and the same numB. 
// Then plus is pressed and no calculations since equals is invalid, but operation is updated.
// Then minus is pressed and no calculations since there's no numB. 
// Then equals is pressed so numA is subtracted from numA.



// If an operator is pressed when there's no numA or numB, do nothing.

// If equals was pressed, check for numA and numB and a valid operator exist.
// If so, do calculations. And set numA to be what's displayed. And set numB to be nothing
// If not, then check if numA and a valid operator exist
// If so, set numB to also equal numA and then do calculations.
// If not, do nothing. 

// If anything else was pressed, check for numA and numB and a valid operator exist.
// If so, do calculations. And set numA to be what's displayed.
// If not, don't do calculations and set operator to be what was pressed.
// Then in either case, set numB to be nothing.
function runOperation (symbol) {
    if (numA == null && numB == null) return;

    if (symbol == "equals") {
        if (numA != null && numB != null && (operator != "" || operator != "equals")) {
            numA = operate(numA, numB, operator);
            display.textContent = numA;
        } else if (numA != null && numB != null && operator == "equals") {
            numA = operate(numA, numB, lastUsedOperator);
            display.textContent = numA;
        } else if (numA != null && (operator != "" || operator != "equals")) {
            numB = numA;
            numA = operate(numA, numB, operator);
            display.textContent = numA;
        } else {
            return;
        }
    } else {
        if (numA != null && numB != null && operator != "" && operator != "equals") {
            numA = operate(numA, numB, operator);
            display.textContent = numA;
        }
        numB = null;
    }
    if (symbol != "equals") lastUsedOperator = symbol;
    operator = symbol;
}

function clearDisplay () {
    display.textContent = '';
}

function restart () {
    numA = null;
    numB = null;
    operator = "";
    lastUsedOperator = "";
}

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
