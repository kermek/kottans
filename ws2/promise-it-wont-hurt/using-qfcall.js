var q = require('q');

q.fcall(function () {
  return JSON.parse(process.argv[2]);
 })
 .catch(console.log)
 .done();