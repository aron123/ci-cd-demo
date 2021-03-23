const { calculate } = require("./calculator")
const assert = require('assert');

describe('Calculator', () => {
    it('should return 2', () => {
        assert.strictEqual(calculate(), 2);
    });
});