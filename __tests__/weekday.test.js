import DayFinder from '../src/js/weekday.js';

describe('DayFinder', () => {
    test('should correctly calculate day of the week for a specific date', () => {
        const calculateDay = new DayFinder();
        expect(calculateDay.calculate(2023, 12, 18)).toMatch('Monday');
    });
});

describe('DayFinder', () => {
    test('should not calculate when date is not valid', () => {
        const calculateDay = new DayFinder();
        expect(calculateDay.calculate(2023, 11, 31)).toBe('Cannot calculate: INVALID DATE');
    });
});