const daysEl  = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = '1 Jan 2022';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalseconds/ 3600 / 24),
          hours = Math.floor(totalseconds / 3600) % 24,
          mins = Math.floor(totalseconds / 60) % 60,
          seconds = Math.floor(totalseconds % 60);

    daysEl.innerHTML = format(days);
    hoursEl.innerHTML = format(hours);
    minsEl.innerHTML = format(mins);
    secondsEl.innerHTML = format(seconds)
}

function format(n){
    return n < 10 ? `0${n}`: n;
}

countdown();
setInterval(countdown, 1000)