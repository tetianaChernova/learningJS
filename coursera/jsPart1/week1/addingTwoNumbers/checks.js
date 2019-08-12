var assert = require('assert');
var sum = require("/Users/tetianachernova/WebstormProjects/Coursera/coursera/week1/addingTwoNumbers/index.js");

assert.equal(sum(13, 32), 45, "By adding 13 and 32 the result is 45");
assert.equal(sum(13, '17'), 30, "By adding 13 and '17' the result is 30");
console.info("OK!");