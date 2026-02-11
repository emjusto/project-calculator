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

    if (e.target.dataset.type === 'number') {
        if (operator === "") {
            resultCon.textContent += ` ${e.target.dataset.text}`;
            firstNum += parseFloat(e.target.dataset.text);
            console.log("first num: " + firstNum) 
        } else {
            if (secondNum === "") {
                resultCon.textContent = "";
            }
            resultCon.textContent += ` ${e.target.dataset.text}`;
            secondNum += parseFloat(e.target.dataset.text);
            console.log("second num: " + secondNum) 
        }
    }
    if (e.target.dataset.type === 'operator') {
        operator = e.target.dataset.text
        console.log("operator: " + operator)  
    }
    if (e.target.id === "equals") {
            console.log("EQUALS");
            operate(firstNum,secondNum,operator); 
        }

    // if (e.target.dataset.type === 'operator' && operator === "" && firstNum != "") {
    //     operator = e.target.dataset.text
    //     console.log("operator: " + operator)
    // }
    // else if (e.target.dataset.type === 'number' && firstNum === "" && operator === "") {
    //     resultCon.textContent += ` ${e.target.dataset.text}`;
    //     firstNum = parseFloat(e.target.dataset.text);
    //     console.log("first num: " + firstNum) 

    // } else if (e.target.dataset.type === 'number' && operator !== "") {
    //     resultCon.textContent += ` ${e.target.dataset.text}`;
    //     secondNum = parseFloat(e.target.dataset.text);   
    //     console.log("second num: " + secondNum )  
    // } else if (e.target.id === "equals" && secondNum !== "") {
    //     console.log("EQUALS");
    //     operate(firstNum,secondNum,operator); 
    // }
});
  
    let firstNum = ""; 
    let secondNum = "";
    let operator = "";

    function add(a,b) {
        let sum = (isNaN(parseFloat(a)) ? 0 : parseFloat(a)) + (isNaN(parseFloat(b)) ? 0 : parseFloat(b));
        resultCon.textContent = sum;
        firstNum = sum;
        operator = "";
        secondNum = ""; 
        return console.log(sum);
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

