document.addEventListener("DOMContentLoaded", () => {
    let calculatorCon = document.querySelector('.calc-box');
    let resultCon = document.querySelector('.resultCon');
    let numCon = document.querySelector('.numbersCon');
    let resultText = document.querySelector('.resultCon').textContent;
    
    let buttons = [
        { id: "clearAll", text: "AC", type: "action" },
        {id: "delete", text: "DEL", type: "action" },
        { id: "divide", text: "/", type: "operator" },
        { id: "7", text: "7", type: "number" },
        { id: "8", text: "8", type: "number" },
        { id: "9", text: "9", type: "number" },
        { id: "multiply", text: "x", type: "operator" },
        { id: "4", text: "4", type: "number" },
        { id: "5", text: "5", type: "number" },
        { id: "6", text: "6", type: "number" },
        { id: "subtract", text: "-", type: "operator" },
        { id: "1", text: "1", type: "number" },
        { id: "2", text: "2", type: "number" },
        { id: "3", text: "3", type: "number" },
        { id: "add", text: "+", type: "operator" },
        { id: "0", text: "0", type: "number" },
        { id: "decimal", text: ".", type: "number" },
        { id: "equals", text: "=", type: "action" },]


buttons.forEach(button => {
    let newButton = document.createElement('div');
    newButton.id = button.id;
    newButton.classList.add('button',button.type);
    newButton.textContent = button.text;

    newButton.dataset.text = button.text;
    newButton.dataset.type = button.type;

    numCon.appendChild(newButton);
})


numCon.addEventListener('click', (e) => {
    let buttonType = e.target.dataset.type;
    let buttonId = e.target.id;
    let buttonText = e.target.dataset.text;

    if (buttonType === 'number') {
        if (operator === "") {
            resultCon.textContent += ` ${buttonText}`;
            firstNum += parseFloat(buttonText);
            console.log("first num: " + firstNum) 
        } else {
            if (secondNum === "") {
                resultCon.textContent = "";
            }
            resultCon.textContent += ` ${buttonText}`;
            secondNum += parseFloat(buttonText);
            console.log("second num: " + secondNum) 
        }
    }
    if (buttonType === 'operator') {
        if (operator !== "" && secondNum !== ""){
            firstNum = operate(firstNum,secondNum,operator); 
            secondNum = ""; 
        }
        operator = e.target.dataset.text
        console.log("operator: " + operator)  
    }
    if (buttonId === "equals") {
            console.log("EQUALS");
            if (firstNum === ""  || operator === "" || secondNum === "") {
                return;
            }
            console.log("first: " + firstNum+ " second: " + secondNum +  " operator: " + operator)
            firstNum = operate(firstNum,secondNum,operator); 
            secondNum = ""; 
        }
    if (buttonId === "clearAll") {
        clear();
    }
});
  
    let firstNum = ""; 
    let secondNum = "";
    let operator = "";

    function add(a,b) {
        let sum = (isNaN(parseFloat(a)) ? 0 : parseFloat(a)) + (isNaN(parseFloat(b)) ? 0 : parseFloat(b));
        resultCon.textContent = sum;
        operator = "+";
        console.log(sum);
        return sum
    }
    function subtract(a,b) {
        let difference = (isNaN(parseFloat(a)) ? 0 : parseFloat(a)) - (isNaN(parseFloat(b)) ? 0 : parseFloat(b));
        resultCon.textContent = difference;
        operator = "-";
        console.log(difference);
        return difference;
    }
    function multiply(a,b) {
        let product = (isNaN(parseFloat(a)) ? 1 : parseFloat(a)) * (isNaN(parseFloat(b)) ? 1 : parseFloat(b));
        resultCon.textContent = product;
        operator = "x";
        console.log(product);
        return product;
    }
    function divide(a,b) {
        let quotient = (isNaN(parseFloat(a)) ? 0 : parseFloat(a)) / (isNaN(parseFloat(b)) ? 1 : parseFloat(b));
        resultCon.textContent = quotient;
        operator = "/";
        console.log(quotient);
        return quotient;

    }

    function operate(num1,num2,operator) {
        switch(operator) {
            case '+':
                return add(num1,num2);
            case '-':
                return subtract(num1,num2);
            case 'x':
                return multiply(num1,num2);
            case '/':
                return divide(num1,num2);
        }
    }

    function clear() {
        firstNum = ""; 
        secondNum = "";
        operator = "";
        resultCon.textContent = "";
    }


})

