var q = require('q');
var defer = q.defer();

defer.promise.then(console.log, console.log);

setTimeout(defer.reject('REJECTED!'), 300);