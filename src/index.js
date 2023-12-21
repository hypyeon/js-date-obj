import './css/styles.scss';
import DayCounter from './js/daycount.js';
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
    const result = document.getElementById("daycount-result-p");
    calTwo.addEventListener("click", e => {
        e.preventDefault();
        options.classList.remove("hidden");
        changeDisplay(option2, option1);
        result.innerText = '';
    });
    calNow.addEventListener("click", e => {
        e.preventDefault();
        options.classList.remove("hidden");
        changeDisplay(option1, option2);
        result.innerText = '';
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
}

function countForm(value, area) {
    if (value === 0) {
        area.innerText = "It's the same day!";
    } else if (value === 1) {
        area.innerText = `${value} day`;
    } else {
        area.innerText = `${value} days`;
    }
} 

function getDaycount() {
    const cal1 = document.getElementById("cal-1");
    const cal2 = document.getElementById("cal-2");
    const result = document.getElementById("daycount-result-p");
    cal1.addEventListener("click", e => {
        e.preventDefault();
        const date1 = document.getElementById("date1").value;
        const date2 = document.getElementById("date2").value;
        const newDates = new DayCounter();
        const calResult = newDates.calculateTwo(date1, date2);
        countForm(calResult, result);
    });
    cal2.addEventListener("click", e => {
        e.preventDefault();
        const date = document.getElementById("date3").value;
        const newDate = new DayCounter();
        const calResult = newDate.calculateOne(date);
        countForm(calResult, result);
        result.append(newDate.passedOrLeft(date));
    });
}

function goBackBtn() {
    document.querySelectorAll(".goBack").forEach(element => {
        element.addEventListener("click", e => {
            e.preventDefault();
            location.reload();
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    appRenderer();
    getWeekday();
    optionRenderer();
    getDaycount();
    goBackBtn();
});