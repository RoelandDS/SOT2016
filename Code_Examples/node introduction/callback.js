'use strict';

const fs = require('fs');

/**
**  Danger of heavy non I/O operations
**/
/*console.log('start');
let a = 0;

for(let i = 0; i < 10000000000; i++ ){
 a++;
}

console.log(a);*/

/**
*   Synchronous
**/
/*
var data = fs.readFileSync('joke.txt');

console.log(data.toString('utf8'));
console.log('And the bartender says, "Success, but you\'re not ready!"');
*/


/**
*   Asynchronous
**/
/*
fs.readFile('joke.txt', function(err, data){
 if (err) console.log(err);
 else console.log(data.toString('utf8'));
});

console.log('And the bartender says, "Success, but you\'re not ready!"');
*/


/**
*   Callback function
**/
readText('joke.txt', function(err, data){
  if (err) console.log(err);
  else console.log(data.toString('utf8'));
});

function readText(file, callback){
  fs.access(file, fs.R_OK, function(err){
    if(err) return callback(err, null);
    else return callback(null, fs.readFileSync('joke.txt'));
  });
}
