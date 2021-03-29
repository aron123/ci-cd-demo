const { calculate } = require("../service/calculator");
const assert = require('assert');

describe('Calculator', () => {
    it('should calculate 1+1=2', () => {
        assert.strictEqual(calculate("1+1"), 2);
    });

    it('should calculate 5-2=3', () => {
        assert.strictEqual(calculate("5-2"), 3);
    });

    it('should calculate 5*5=25', () => {
        assert.strictEqual(calculate("5*5"), 25);
    });

    it('should calculate 5/5=1', () => {
        assert.strictEqual(calculate('5/5'), 1);
    });

    it('should not divide by zero', () => {
        assert.throws(() => calculate('5/0'));
    })

    it('should throw Error on invalid expression', () => {
        assert.throws(() => calculate("some invalid expression"));
    });
});