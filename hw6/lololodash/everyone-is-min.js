var _ = require('lodash');

var worker = function(towns) {
  var result = {};
  result.hot = [];
  result.warm = [];
  _.forEach(towns, function (data, town) {
    if (_.every(data, function (temperature) {
      return temperature > 19;
    })) {
      result.hot.push(town);
    } else if (_.some(data, function (temperature) {
      return temperature > 19;
    })) {
      result.warm.push(town);
    }
  });
  return result;
}

module.exports = worker;