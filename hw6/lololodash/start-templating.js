var _ = require('lodash');

var worker = function(item) {
  return _.template('Hello <%= name %> (logins: <%= login.length %>)',
   item);
}

module.exports = worker;