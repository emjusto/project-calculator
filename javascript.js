document.addEventListener("DOMContentLoaded", () => {
    let calculatorCon = document.querySelector('.calc-box');
    let resultCon = document.querySelector('.result');
    let numCon = document.querySelector('.numbers');

    let numArray = [
        { id: "clearAll",text: "AC" },
        {id: "delete", text: "del" },
        { id: "divide", text: "/" },
        { id: "7", text: "7" },
        { id: "8", text: "8" },
        { id: "9", text: "9" },
        { id: "multiply", text: "x" },
        { id: "4", text: "4" },
        { id: "5", text: "5" },
        { id: "6", text: "6" },
        { id: "subtract", text: "-" },
        { id: "1", text: "1" },
        { id: "2", text: "2" },
        { id: "3", text: "3" },
        { id: "add", text: "+" },
        { id: "0", text: "0" },
        { id: "decimal", text: "." },
        { id: "equals", text: "=" },]

    for (let i=0; i<=19; 1++) {
        let numBox = document.createElement('div');
        numBox
    }



    let firstNum = 0;
    let secondNum = 0;
    let operator = "";

    function add(a,b) {
        return a + b;
    }
    function subtract(a,b) {
        return a - b;
    }
    function multiply(a,b) {
        return a * b;
    }
    function divide(a,b) {
        return a / b;

    }

    function operate(num1,num2,operator) {
        switch(operator) {
            case '+':
                return add(num1,num2);
            case '-':
                return subtract(num1,num2);
            case '*':
                return multiply(num1,num2);
            case '/':
                return divide(num1,num2);
        }
    }


})