document.addEventListener("DOMContentLoaded", () => {
    let calculatorCon = document.querySelector('.calc-box');
    let resultCon = document.querySelector('.result');
    let numCon = document.querySelector('.numbers');

    let numArray = [
        { id: "clearAll", text: "AC", type: "action" },
        {id: "delete", text: "del", type: "action"  },
        { id: "divide", text: "/", type: "operator"  },
        { id: "7", text: "7", type: "number"  },
        { id: "8", text: "8", type: "number"  },
        { id: "9", text: "9", type: "number"  },
        { id: "multiply", text: "x", type: "operator"  },
        { id: "4", text: "4", type: "number"  },
        { id: "5", text: "5", type: "number"  },
        { id: "6", text: "6", type: "number"  },
        { id: "subtract", text: "-", type: "operator"  },
        { id: "1", text: "1", type: "number"  },
        { id: "2", text: "2", type: "number"  },
        { id: "3", text: "3", type: "number"  },
        { id: "add", text: "+", type: "operator"  },
        { id: "0", text: "0", type: "number"  },
        { id: "decimal", text: ".", type: "number"  },
        { id: "equals", text: "=", type: "action"  },]

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