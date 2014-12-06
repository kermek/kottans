var _ = require('lodash');

var worker = function(item) {
  var grouped = _.reduce(item, function (accumulator, value, key) {
    accumulator[value.article] = +value.quantity + (accumulator[value.article] || 0);
    return accumulator;
  }, {});
  console.log(grouped);
  var result = [];
  _.forEach(grouped, function (value, key) {
    var obj = {};
    obj.article = +key;
    obj.total_orders = value;
    result.push(obj);
  });
  return _.sortBy(result, 'total_orders').reverse();
}

module.exports = worker;