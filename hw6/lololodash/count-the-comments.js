var _ = require('lodash');

var worker = function(item) {
  var counted = [];
  var grouped = _.groupBy(item, 'username');
  var result = [];
  _.forEachRight(grouped, function (value, key) {
    var obj = {};
    obj.username = key;
    obj.comment_count = _.size(value);
    result.push(obj);
    return;
  });
  return result;
}

module.exports = worker;