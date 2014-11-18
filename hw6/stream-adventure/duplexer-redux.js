var duplex = require('duplexer');
var through = require('through');
var countries = {};
var obj = {}

function writeCountries(buf) {
  countries[buf.country] = (countries[buf.country] || 0) + 1;
}

function endCountries() {
  obj.setCounts(countries);
}

module.exports = function (counter) {
  obj = counter;
  return duplex(through(writeCountries, endCountries), counter);
}
