// Countdown Timer Logic
let countdownInterval;

function startCountdown() {
    const seconds = parseInt(document.getElementById('countdown-input').value);
    if (isNaN(seconds) || seconds <= 0) {
        alert('Please enter a valid number of seconds.');
        return;
    }
    let timeRemaining = seconds;
    document.getElementById('countdown-display').innerText = formatTime(timeRemaining);
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        timeRemaining--;
        document.getElementById('countdown-display').innerText = formatTime(timeRemaining);
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            alert('Countdown complete!');
        }
    }, 1000);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Stopwatch Logic
let stopwatchInterval;
let stopwatchTime = 0;

function startStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        document.getElementById('stopwatch-display').innerText = formatStopwatchTime(stopwatchTime);
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById('stopwatch-display').innerText = '00:00:00';
}

function formatStopwatchTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Toggle between Countdown and Stopwatch
function showCountdown() {
    document.getElementById('countdown').style.display = 'block';
    document.getElementById('stopwatch').style.display = 'none';
}

function showStopwatch() {
    document.getElementById('stopwatch').style.display = 'block';
    document.getElementById('countdown').style.display = 'none';
}

// Initialize with Countdown visible
showCountdown();
