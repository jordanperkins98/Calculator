const Screen = document.querySelector('.screenText');

const insertChar = (char) => {
    Screen.innerHTML += char + ' ';
}  

const clearScreen = () => {
    Screen.innerHTML = '';
}

const deleteChar = () => {
    Screen.innerHTML = Screen.innerHTML.split('').slice(0, -1).join('');
}

const calculate = () => {
    let result = 0;
    let operator = '';
    let operands = [];

    expression = Screen.innerHTML.split(' ');

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '+' || expression[i] === '-' || expression[i] === '/' || expression[i] == '\u00D7') {
            operator = expression[i];
        } else {
            operands.push(expression[i]);
        }
    }

    result = operate(operator, parseInt(operands[0]), parseInt(operands[1]));
    Screen.innerHTML = result;


}


const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const divide = (a, b) => {
    return a / b;
}

const multiply = (a, b) => {
    return a * b;
}

const operate = (operator, a, b) => {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '/':
            return divide(a, b);
        case '\u00D7':
            return multiply(a, b);
    }
}


