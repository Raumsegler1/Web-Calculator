let firstVal = "";
let secondVal = "";
let resultVal = 0;
let operator = "";
let Display1 = "";
let Display2 = "";
let Display3 = "";

const display = document.querySelector("#display");
const zero = document.querySelector("#zero")
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const clearBtn = document.querySelector("#clear");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalBtn = document.querySelector("#equals");
const dotBtn = document.querySelector("#dot");
const toggleBtn = document.querySelector("#toggle")

zero.addEventListener       ("click", () => {
    if (operator === "") {
        if(firstVal === "0") {} else {addNumber(0)}
    } else {
        if(secondVal === "0") {} else {addNumber(0)}
    }
})
one.addEventListener        ("click", () => addNumber(1));
two.addEventListener        ("click", () => addNumber(2));
three.addEventListener      ("click", () => addNumber(3));
four.addEventListener       ("click", () => addNumber(4));
five.addEventListener       ("click", () => addNumber(5));
six.addEventListener        ("click", () => addNumber(6));
seven.addEventListener      ("click", () => addNumber(7));
eight.addEventListener      ("click", () => addNumber(8));
nine.addEventListener       ("click", () => addNumber(9));

clearBtn.addEventListener   ("click", () => clearAll());
addBtn.addEventListener     ("click", () => changeOp("+"));
subBtn.addEventListener     ("click", () => changeOp("-"));
multiplyBtn.addEventListener("click", () => changeOp("*"));
divideBtn.addEventListener  ("click", () => changeOp("/"));

equalBtn.addEventListener   ("click", () => {
    if (Display1 !== "" && Display2 !== "" && Display3 !== "") {
    resultVal = operate(firstVal, secondVal, operator); 
    clearDisplay();
    clearBaseVal();
    changeDisplay(resultVal, 0);
    firstVal = resultVal;
    } else {clearAll()}
});

dotBtn.addEventListener     ("click", () => {
    if (operator === "") {
    if (firstVal.includes(".")) {} else {addNumber(".")}
    } else {
    if (secondVal.includes(".")) {} else {addNumber(".")}
    }
});

function changeOp(op) {
    operator = op;
    changeDisplay(operator, 1);
}

function addNumber(num) {
    if (operator === "") {
    let stringVal = String(firstVal) + String(num);
    firstVal = stringVal;
    chooseDisplay(firstVal);
    } else {
    let stringVal2 = String(secondVal) + String(num);
    secondVal = stringVal2;
    chooseDisplay(secondVal); 
    }
}

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
    if (num2 === 0) {return "That can't be right"}
    return num1 / num2
}

function operate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operator === "+") return add(num1, num2);
    if (operator === "-") return sub(num1, num2);
    if (operator === "/") return divide(num1, num2);
    if (operator === "*") return multiply(num1, num2);
}

function chooseDisplay(Content) {
    if (Display2 === "") {
        changeDisplay(Content, 0)
    } else {
        changeDisplay(Content, 2)
    }
}

function changeDisplay(Content, value) {
    if (value === 0) {
        Display1 = Content;
        display.textContent = Display1
    } else if (value === 1){
        Display2 = Content;
        display.textContent = Display1 + Display2 + Display3
    } else if (value === 2) {
        Display3 = Content;
        display.textContent = Display1 + Display2 + Display3
    } else {
        console.log("Display Error Invalid value")
    }
}

function clearDisplay() {
    changeDisplay("", 0);
    changeDisplay("", 1);
    changeDisplay("", 2);
}

function clearBaseVal() {
    firstVal = "";
    secondVal = "";
}

function clearAll() {
    changeDisplay("", 0);
    changeDisplay("", 1);
    changeDisplay("", 2);
    firstVal = "";
    secondVal = "";
    resultVal = 0;
    operator = ""
    Display1 = ""
}

console.log(operate(5, 10, "+"));
console.log(operate(5, 10, "-"));
console.log(operate(5, 10, "*"));
console.log(operate(5, 10, "/"));