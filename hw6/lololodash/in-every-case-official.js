var _ = require('lodash');

var worker = function(item) {
  _.forEach(item, function (value, key) {
    if (value.population > 1) {
      return item[key].size = 'big';
    } else if (value.population > 0.5) {
      return item[key].size = 'med';
    } else {
      return item[key].size = 'small'
    }
  });
  return item;
}

module.exports = worker;