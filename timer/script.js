const days = document.querySelector(".days > p");
const hours = document.querySelector(".hours > p");
const mins = document.querySelector(".mins > p");
const secs = document.querySelector(".secs > p");

const stopBtn = document.querySelector(".stop-timer");

const startBtn = document.querySelector(".timer-form input[type='submit']");

let timerInterval;

/* total seconds means time you are passing convert it to seconds
then pass like if you want a timer of 2days 23hours 5mins 0sec calculate total 
seconds of this time */

function timer(totalSeconds = 0) {
    // date string should be in the same format
    const date = new Date("1 jan 2022");

    const mSec = 1000;

    // getting millisecond of your total Seconds
    let totalMilliSec = totalSeconds * mSec;

    timerInterval = setInterval(() => {
        totalMilliSec -= mSec;
        if (totalMilliSec >= 0) {
            const fDate = new Date(date.getTime() + totalMilliSec);
            /* don't remove these variables uncomment those which your are
            going to use */

            /* for example if you want days timer like day 1 hour 23 min 1 sec 40 
            like that uncomment all these variables */

            let daysLeft = fDate.getDate() - date.getDate();
            let hoursLeft = fDate.getHours();
            const minsLeft = fDate.getMinutes();
            const secsLeft = fDate.getSeconds();

            // do your work with these variables

            days.textContent = daysLeft;
            hours.textContent = hoursLeft;
            mins.textContent = minsLeft;
            secs.textContent = secsLeft;


        } else {
            stopTimer();
        }
    }, 1000);

}

document.querySelector(".timer-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const totalSec = parseFloat(document.querySelector(".timer-form input[type='text'").value);

    stopBtn.classList.add("active");

    startBtn.disabled = true;
    startBtn.classList.add("inactive");

    timer(totalSec);
});

function stopTimer() {
    console.log("times up");
    clearInterval(timerInterval);
    stopBtn.classList.remove("active");
    startBtn.disabled = false;
    startBtn.classList.remove("inactive");
}


function clearTimer(){
    [days,hours,mins,secs].forEach(field=>{
        field.textContent = "0";
    })
}

stopBtn.addEventListener("click", function() {
    stopTimer();
    clearTimer();
});