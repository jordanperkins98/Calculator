const Screen = document.querySelector('.screenText');

const insertChar = (char) => {
    if (char === '*') char = '\u00D7';

    if (char === '+' || char === '-' || char === '/' || char == '\u00D7') {
        Screen.innerHTML += ' ' + char + ' '
    } else {
        Screen.innerHTML += char;
    }
}


const clearScreen = () => {
    Screen.innerHTML = '';
}

const deleteChar = () => {

   // Get the characters that make up the screen, excluding the last character.
    let screenCharacters = Screen.innerHTML.split('').slice(0,-1);

    // Join the characters together and remove any trailing spaces.
    Screen.innerHTML = screenCharacters.join('').trimEnd();
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
    result = isNaN(result) ? Screen.innerHTML = 'SYNTAX ERROR' : result

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
        case '*':
            return multiply(a, b);
    }
}

window.addEventListener('keydown', (e) => {

    switch(e.key) {
        case 'Backspace':
            deleteChar();
            break;
        case 'Enter':
            calculate();
            break;
        case 'Escape':
            clearScreen();
            break;
        case '+':
        case '-':
        case '/':
        case '*':
            insertChar(e.key);
            break;
        default:
            if (typeof Number(e.key) === 'number' && isNaN(Number(e.key)) == false &&  e.key != '\u0020') {
                insertChar(Number(e.key));
            };
            break;
    }

    console.log(e.key)

})
