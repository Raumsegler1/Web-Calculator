let currentVal = 0;
let lastVal = 0;
let resultVal = 0;
let operator = "+";

const display = document.querySelector("#display");
const one = document.querySelector("#1");
const two = document.querySelector("#2");
const three = document.querySelector("#3");
const four = document.querySelector("#4");
const five = document.querySelector("#5");
const six = document.querySelector("#6");
const seven = document.querySelector("#7");
const eight = document.querySelector("#8");
const nine = document.querySelector("#9");
const clearBtn = document.querySelector("#clear")

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, operator) {
    if (operator === "+") return add(num1, num2);
    if (operator === "-") return sub(num1, num2);
    if (operator === "/") return divide(num1, num2);
    if (operator === "*") return multiply(num1, num2);
}

function changeDisplay(Content) {
    display.textContent(Content);
}

function clear() {
    changeDisplay("");
    currentVal = 0;
    lastVal = 0;
    resultVal = 0;
}

console.log(operate(5, 10, "+"));
console.log(operate(5, 10, "-"));
console.log(operate(5, 10, "*"));
console.log(operate(5, 10, "/"));