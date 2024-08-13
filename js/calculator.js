document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('calc-display');
    const buttons = document.querySelectorAll('.btn');
    const historyList = document.getElementById('history-list');
    const clearHistoryBtn = document.getElementById('clear-history-btn');

    let history = [];

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                display.value = '';
            } else if (value === '=') {
                try {
                    const result = eval(display.value);
                    display.value = result;

                    // Save to history
                    addToHistory(display.value);

                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += value;
            }
        });
    });

    clearHistoryBtn.addEventListener('click', function () {
        history = []; // Clear the history array
        updateHistoryDisplay(); // Update the display
    });

    function addToHistory(value) {
        history.push(value);

        // Keep the history to the last 10 results
        if (history.length > 10) {
            history.shift();
        }

        updateHistoryDisplay();
    }

    function updateHistoryDisplay() {
        historyList.innerHTML = '';

        history.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            historyList.appendChild(li);
        });
    }
});
