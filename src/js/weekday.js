export default class DayFinder {
    constructor() {
        this.daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday", 
            "Friday",
            "Saturday"
        ];
    }

    isValidDate(year, month, day) {
        const inputValue = new Date(year, month - 1, day); // because Jan is set to 0
        return (
            // this will validate date
            inputValue.getFullYear() === year &&
            inputValue.getMonth() === month - 1 &&
            inputValue.getDate() === day
        );
    }

    calculate(year, month, day) {
        let result;
        // call 'isValidDate' function to check validity
        if (!this.isValidDate(year, month, day)) {
            result = 'Cannot calculate: INVALID DATE';
        } else {
            // if valid, proceed to next: 
            const inputValue = new Date(year, month - 1, day); // because Jan is set to 0
            // using .getDay() will render numbers from 0 to 6
            // ex) 0 would be: this.daysOfWeek[0] === 'Sunday'
            // value from .getDay() = an index
            const dayOfWeek = this.daysOfWeek[inputValue.getDay()];
            result = dayOfWeek;
        }
        return result;
    }
}