function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    if (b == 0) {
        throw new Error('Can not divide by zero.');
    }

    return a / b;
}

function calculate(expression) {
    const regexp = /^([0-9]{1,})(\+|\-|\*|\/)([0-9]{1,})$/
    const parsed = expression.match(regexp);

    if (!parsed || parsed.length != 4) {
        throw Error('Invalid expression.')
    }

    const a = parseInt(parsed[1]);
    const operator = parsed[2];
    const b = parseInt(parsed[3]);

    switch (operator) {
        case '+': return add(a, b);
        case '-': return sub(a, b);
        case '*': return mul(a, b);
        case '/': return div(a, b);
    }
}

module.exports = {
    calculate
};
