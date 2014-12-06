var _ = require('lodash');

var worker = function(item) {
  var result = {
    hot: [],
    warm: []
  };
  function check_temp(item) {
    return item > 19;
  }
  _.forEach(item, function (town, townname) {
    if (_.every(town, check_temp)) {
      result.hot.push(townname);
    } else if (_.some(town, check_temp)) {
      result.warm.push(townname);
    }
  });
  return result;
}

module.exports = worker;