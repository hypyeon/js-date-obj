import './css/styles.scss';
//import DayFinder from './js/weekday.js';

function changeDisplay(hide, unhide) {
    hide.classList.add("hidden");
    unhide.classList.remove("hidden");
}

function formHandler() {
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

document.addEventListener("DOMContentLoaded", () => {
    formHandler();
});