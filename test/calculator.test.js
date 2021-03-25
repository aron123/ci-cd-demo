const { calculate } = require("../service/calculator");
const assert = require('assert');

describe('Calculator', () => {
    it('should calculate 1+1=2', () => {
        assert.strictEqual(calculate("1+1"), 2);
    });
});