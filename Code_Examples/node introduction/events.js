'use strict';

// Create event emmitter
const EventEmitter = require('events');

// create emmitter class (ES6)
class MyEmitter extends EventEmitter {}

// create event
const myEmitter = new MyEmitter();

// create event listener
myEmitter.on('event', function() {
  console.log('an event occurred!');
});

// create emitter
myEmitter.emit('event');

// passing on arguments
myEmitter.on('secondEvent', (a, b) => {
  console.log(a);
  console.log(b);
});

myEmitter.emit('secondEvent', 'Hello', 'How are you doing!');