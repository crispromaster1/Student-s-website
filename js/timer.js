document.addEventListener('DOMContentLoaded', function () {
    const timerDisplay = document.getElementById('timer-display');
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const resetBtn = document.getElementById('reset-btn');

    let timer;
    let seconds = 0;

    function updateTimerDisplay() {
        let hrs = Math.floor(seconds / 3600);
        let mins = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;

        // Format the time as HH:MM:SS
        timerDisplay.value = 
            String(hrs).padStart(2, '0') + ':' + 
            String(mins).padStart(2, '0') + ':' + 
            String(secs).padStart(2, '0');
    }

    function startTimer() {
        if (!timer) {
            timer = setInterval(() => {
                seconds++;
                updateTimerDisplay();
            }, 1000);
        }
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    function resetTimer() {
        stopTimer();
        seconds = 0;
        updateTimerDisplay();
    }

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);
});
