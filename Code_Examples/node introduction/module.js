'use strict';

const calculator = require('./lib/calculator');

calculator.subtract(4, 2, (err, res) => {
  if (err) console.log(err.message);
  else console.log('subtract: ', res.result);
});

calculator.add(4, 2, (err, res) => {
  if (err) console.log(err.message);
  else console.log('add: ', res.result);
});

calculator.multiply(4, 2, (err, res) => {
  if (err) console.log(err.message);
  else console.log('multiply: ', res.result);
});

calculator.divide(4, 2, (err, res) => {
  if (err) console.log(err.message);
  else console.log('divide: ', res.result);
});

calculator.divide(4, 0, (err, res) => {
  if (err) console.log(err.message);
  else console.log('divide: ', res.result);
});