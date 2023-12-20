import './css/styles.scss';

function changeDisplay(hide, unhide) {
    hide.classList.add("hidden");
    unhide.classList.remove("hidden");
}

function selection() {
    const choices = document.querySelectorAll("app");
    const form = document.getElementById("main");
    const weekday = document.getElementById("weekday");
    const daycount = document.getElementById("daycount");
    const timezone = document.getElementById("timezone");
    for (let i = 0; i < choices.length; i++) {
        switch (choices[i].value) {
            case "weekday": 
                changeDisplay(form, weekday);
                break;
            case "daycount":
                changeDisplay(form, daycount);
                break;
            case "timezone":
                changeDisplay(form, timezone);
                break;
            default:
                break;
        }
    }
}

function formHandler() {
    const form = document.getElementById("main");
    form.addEventListener("submit", e => {
        e.preventDefault();
        selection();
    });
}

window.onload = () => {
    formHandler();
};