var isStart = false;
var hoursInput = document.getElementById("hours");
var minutesInput = document.getElementById("minutes");
var secondsInput = document.getElementById("seconds");
var hours = Number(hoursInput.value);
var minutes = Number(minutesInput.value);
var seconds = Number(secondsInput.value);
var timer;

hoursInput.addEventListener("change", function () {
    hours = Number(hoursInput.value);
    updateTimer();
});

minutesInput.addEventListener("change", function () {
    minutes = Number(minutesInput.value);
    updateTimer();
});

secondsInput.addEventListener("change", function () {
    seconds = Number(secondsInput.value);
    updateTimer();
});

const changebtn = () => {
    if (!isStart) {
        document.getElementById("btn").innerHTML = "Stop"
        document.getElementById("btn").style.background = "rgb(231, 77, 103)"
        startTimer()
        isStart = true;
        console.log("start click....")
    }
    else {
        document.getElementById("btn").innerHTML = "Start"
        document.getElementById("btn").style.background = "rgb(231, 77, 103)"
        stopTimer()
        console.log("stop click....")
        isStart = false;
    }
}

function startTimer() {
    timer = setTimeout(function () {
        if (seconds === 0) {
            if (minutes === 0) {
                if (hours === 0) {
                    clearTimeout(timer);
                    return;
                }
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }

        updateTimer();

        startTimer();
    }, 1000);
}

function stopTimer() {
    clearTimeout(timer);
}

function resetTimer() {
    isStart = true
    changebtn()
    clearTimeout(timer);
    hours = Number(hoursInput.value);
    minutes = Number(minutesInput.value);
    seconds = Number(secondsInput.value);
    updateTimer();
}

function updateTimer() {
    document.getElementById("timer").innerHTML =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}