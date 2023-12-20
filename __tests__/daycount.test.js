import DayCounter from '../src/js/daycount.js';

describe('DayCounter', () => {
    test('should correctly calculate difference between two dates', () => {
        const newDates = new DayCounter();
        expect(newDates.calculateTwo('2023-12-25', '2023-12-20')).toEqual(5);
    });
    test('should correctly calculate difference between a date and the present date', () => {
        const newDate = new DayCounter();
        expect(newDate.calculateOne('2023-12-21')).toEqual(1);
    })
});