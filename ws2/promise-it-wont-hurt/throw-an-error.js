function parsePromised(data) {
  var q = require('q');
  var defer = q.defer();
  try {
    parsed = JSON.parse(data);
    defer.resolve(parsed);
    return defer.promise;
  } catch (e) {
    defer.reject(e);
    return defer.promise;
  }
}

parsePromised(process.argv[2]).then(null, console.log);