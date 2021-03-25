const express = require('express');
const app = express();

const calculatorCtrl = require('./controller/calculator-controller');

app.use(express.static('static'));

app.get('/api/calculator', calculatorCtrl.calculate);

app.listen(3007, 'localhost', () => {
    console.log('Server listening on 3007 ...');
});
