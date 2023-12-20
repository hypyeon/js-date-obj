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
    //const daycount = document.getElementById("daycount");
    //const timezone = document.getElementById("timezone");
    weekday.addEventListener("click", e => {
        e.preventDefault();
        changeDisplay(form, weekdayApp);
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

document.addEventListener("DOMContentLoaded", () => {
    appRenderer();
    getWeekday();
});