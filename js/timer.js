document.addEventListener('DOMContentLoaded', function () {
    const timerDisplay = document.getElementById('timer-display');
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const resetBtn = document.getElementById('reset-btn');

    const stopwatchDisplay = document.getElementById('stopwatch-display');
    const startStopwatchBtn = document.getElementById('start-stopwatch-btn');
    const stopStopwatchBtn = document.getElementById('stop-stopwatch-btn');
    const resetStopwatchBtn = document.getElementById('reset-stopwatch-btn');

    const alarmTimeInput = document.getElementById('alarm-time');
    const setAlarmBtn = document.getElementById('set-alarm-btn');
    const stopAlarmBtn = document.getElementById('stop-alarm-btn');
    const alarmSound = document.getElementById('alarm-sound');

    const timerSection = document.getElementById('timer-section');
    const stopwatchSection = document.getElementById('stopwatch-section');
    const alarmSection = document.getElementById('alarm-section');

    const timerTab = document.getElementById('timer-tab');
    const stopwatchTab = document.getElementById('stopwatch-tab');
    const alarmTab = document.getElementById('alarm-tab');

    let timer;
    let stopwatchTimer;
    let alarmTimer;
    let seconds = 0;
    let stopwatchSeconds = 0;
    let alarmTime;

    // Timer Functions
    function updateTimerDisplay() {
        let hrs = Math.floor(seconds / 3600);
        let mins = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;

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

    // Stopwatch Functions
    function updateStopwatchDisplay() {
        let hrs = Math.floor(stopwatchSeconds / 3600);
        let mins = Math.floor((stopwatchSeconds % 3600) / 60);
        let secs = stopwatchSeconds % 60;

        stopwatchDisplay.value = 
            String(hrs).padStart(2, '0') + ':' + 
            String(mins).padStart(2, '0') + ':' + 
            String(secs).padStart(2, '0');
    }

    function startStopwatch() {
        if (!stopwatchTimer) {
            stopwatchTimer = setInterval(() => {
                stopwatchSeconds++;
                updateStopwatchDisplay();
            }, 1000);
        }
    }

    function stopStopwatch() {
        if (stopwatchTimer) {
            clearInterval(stopwatchTimer);
            stopwatchTimer = null;
        }
    }

    function resetStopwatch() {
        stopStopwatch();
        stopwatchSeconds = 0;
        updateStopwatchDisplay();
    }

    // Alarm Functions
    function checkAlarm() {
        let currentTime = new Date();
        let currentHours = String(currentTime.getHours()).padStart(2, '0');
        let currentMinutes = String(currentTime.getMinutes()).padStart(2, '0');
        let formattedTime = currentHours + ':' + currentMinutes;

        if (formattedTime === alarmTime) {
            alarmSound.play();  // Play the alarm sound
            alert('Alarm ringing!');
            stopAlarm();
        }
    }

    function setAlarm() {
        alarmTime = alarmTimeInput.value;
        if (!alarmTimer) {
            alarmTimer = setInterval(checkAlarm, 1000);
        }
    }

    function stopAlarm() {
        if (alarmTimer) {
            clearInterval(alarmTimer);
            alarmTimer = null;
        }
        alarmSound.pause();
        alarmSound.currentTime = 0;  // Reset the sound to the beginning
    }

    // Tab Switching Functions
    function showTimer() {
        timerSection.style.display = 'block';
        stopwatchSection.style.display = 'none';
        alarmSection.style.display = 'none';
    }

    function showStopwatch() {
        timerSection.style.display = 'none';
        stopwatchSection.style.display = 'block';
        alarmSection.style.display = 'none';
    }

    function showAlarm() {
        timerSection.style.display = 'none';
        stopwatchSection.style.display = 'none';
        alarmSection.style.display = 'block';
    }

    // Event Listeners
    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);

    startStopwatchBtn.addEventListener('click', startStopwatch);
    stopStopwatchBtn.addEventListener('click', stopStopwatch);
    resetStopwatchBtn.addEventListener('click', resetStopwatch);

    setAlarmBtn.addEventListener('click', setAlarm);
    stopAlarmBtn.addEventListener('click', stopAlarm);

    timerTab.addEventListener('click', showTimer);
    stopwatchTab.addEventListener('click', showStopwatch);
    alarmTab.addEventListener('click', showAlarm);
});
