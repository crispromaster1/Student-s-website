let history = [];

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === 'sqrt(' || value === 'log(') {
        display.value += value;
    } else if (value === '!') {
        display.value += 'factorial(';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.value;

    try {
        // Handle special cases
        expression = expression.replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');
        expression = expression.replace(/log\(([^)]+)\)/g, 'Math.log10($1)');
        expression = expression.replace(/factorial\(([^)]+)\)/g, (match, p1) => factorial(parseInt(p1)));

        // Evaluate the expression
        const result = eval(expression);

        // Add to history
        addToHistory(`${expression} = ${result}`);

        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}

function factorial(n) {
    if (n < 0) return 'Error';
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function addToHistory(entry) {
    history.push(entry);
    const historyList = document.getElementById('history-list');
    const listItem = document.createElement('li');
    listItem.textContent = entry;
    historyList.appendChild(listItem);
}
