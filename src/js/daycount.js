export default class DayCounter {
    calculateTwo(date1, date2) {
        return Math.abs(new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24);
    }
    calculateOne(date) {
        const result = Math.abs(Date.now() - new Date(date)) / (1000 * 60 * 60 * 24);
        return Math.ceil(result);
    }
}