const analyze = require('./character_count').analyze;
const logger = require('./character_count').logger;

console.log("I'm being executed in the terminal!!!");

var helloWorld = 'Hello World!!';

console.log(helloWorld);

logger(analyze('abcddddd'));
