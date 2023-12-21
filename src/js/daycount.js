export default class DayCounter {
    calculateTwo(date1, date2) {
        return Math.abs(new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24);
    }
    getDifference(date) {
        const currentDate = new Date(Date.now());
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;

        return (new Date(formattedDate) - new Date(date)) / (1000 * 60 * 60 * 24);
    }
    calculateOne(date) {
        return Math.abs(this.getDifference(date));
    }
    passedOrLeft(date) {
        if (this.getDifference(date) > 0) {
            return ' passed';
        } else {
            return ' left';
        }
    }
}