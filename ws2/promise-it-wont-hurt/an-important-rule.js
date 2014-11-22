var q = require('q');

function throwMyGod() {
  throw new Error('OH NOES');
}

function iterate(i) {
  console.log(i);
  return ++i;
}

q.fcall(iterate, 1)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(throwMyGod)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(null, console.log)
 .done();