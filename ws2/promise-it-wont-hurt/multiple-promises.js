var q = require('q');
var defer1 = q.defer();
var defer2 = q.defer();

function all(promiseOne, promiseTwo) {
  var groupDefer = q.defer();
  var counter = 0;
  var value1;
  var value2;

  promiseOne
  .then(function (result) {
    value1 = result;
    counter++;
    if (counter >= 2) groupDefer.resolve([value1, value2]);
  })
  .then(null, groupDefer.reject)
  .done();

  promiseTwo
  .then(function (result) {
    value2 = result;
    counter++;
    if (counter >= 2) groupDefer.resolve([value1, value2]);
  })
  .then(null, groupDefer.reject)
  .done();

  return groupDefer.promise;
}

all(defer1.promise, defer2.promise)
.then(console.log)
.done();

setTimeout(function() {
  defer1.resolve('PROMISES');
  defer2.resolve('FTW');
}, 200);