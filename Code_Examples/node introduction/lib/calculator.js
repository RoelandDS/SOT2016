'use strict';

module.exports = {
  subtract: subtract,
  add: add,
  multiply: multiply,
  divide: divide
}

function subtract (a, b, cb){
  let c = a - b;
  return cb(null, {result: c});
}

function add (a, b, cb){
  let c = a + b;
  return cb(null, {result: c});
}

function multiply (a, b, cb){
  let c = a * b;
  return cb(null, {result: c});
}

function divide (a, b, cb){
  if (b === 0) return cb({message: 'you can\'t divide by zero'})
  let c = a / b;
  return cb(null, {result: c});
}