'use strict';

const fs = require('fs');

let readableStream = fs.createReadStream('test.txt', 'utf8');
let writableStream = fs.createWriteStream('test2.txt', 'utf8');

readableStream.on('data', function(chunk){
  console.log(chunk);
  console.log('==========');
});

readableStream.pipe(writableStream);