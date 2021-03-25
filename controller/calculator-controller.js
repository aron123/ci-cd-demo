const calculatorService = require('../service/calculator');

function calculate(req, res) {
    const expression = req.query.expr;

    try {
        const result = calculatorService.calculate(expression);
        res.json({ result });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    calculate
};
