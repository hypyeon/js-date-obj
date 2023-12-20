import './css/styles.scss';
import DayFinder from './js/weekday.js';

function changeDisplay(hide, unhide) {
    hide.classList.add("hidden");
    unhide.classList.remove("hidden");
}

function appRenderer() {
    const form = document.getElementById("landing");
    const weekday = document.getElementById("weekday");
    const weekdayApp = document.getElementById("weekday-app");
    const daycount = document.getElementById("daycount");
    const daycountApp = document.getElementById("daycount-app");
    //const timezone = document.getElementById("timezone");
    weekday.addEventListener("click", e => {
        e.preventDefault();
        changeDisplay(form, weekdayApp);
    });
    daycount.addEventListener("click", e => {
        e.preventDefault();
        changeDisplay(form, daycountApp);
    });
}

function optionRenderer() {
    const options = document.getElementById("daycount-options");
    const calTwo = document.getElementById("calTwo");
    const calNow = document.getElementById("calNow");
    const option1 = document.getElementById("daycount-option-1");
    const option2 = document.getElementById("daycount-option-2");
    calTwo.addEventListener("click", e => {
        e.preventDefault();
        options.classList.remove("hidden");
        changeDisplay(option2, option1);
    });
    calNow.addEventListener("click", e => {
        e.preventDefault();
        options.classList.remove("hidden");
        changeDisplay(option1, option2);
    });
}

function getWeekday() {
    const form = document.getElementById("weekday-form");
    const result = document.getElementById("weekday-result-p");
    form.addEventListener("submit", e => {
        e.preventDefault();
        const year = parseInt(document.getElementById("year").value);
        const month = parseInt(document.getElementById("month").value);
        const date = parseInt(document.getElementById("date").value);
        if (year && month && date) {
            const newDate = new DayFinder();
            result.innerText = newDate.calculate(
                year, 
                month, 
                date
            );
        } else {
            result.innerText = 'No date to be calculated.';
        }
    });
    document.querySelector("[type='reset']").addEventListener("click", e => {
        e.preventDefault();
        form.reset();
        result.innerText = '';
    });
    document.getElementById("goBack").addEventListener("click", e => {
        e.preventDefault();
        location.reload();
    });
}

function getDaycount() {
    const cal1 = document.getElementById("cal-1");
    const cal2 = document.getElementById("cal-2");
    const result = document.getElementById("daycount-result-p");
    cal1.addEventListener("click", e => {
        e.preventDefault();
        result.innerText = '';
    });
    cal2.addEventListener("click", e => {
        e.preventDefault();
        result.innerText = '';
    });
}

document.addEventListener("DOMContentLoaded", () => {
    appRenderer();
    getWeekday();
    optionRenderer();
    getDaycount();
});