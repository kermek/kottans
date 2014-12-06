var _ = require('lodash');

var worker = function(item) {
  var result = {};
  var totalIncome = _.reduce(item, function (sum, freelancer) {
    return sum + freelancer.income;
  }, 0);
  result.average = totalIncome / _.size(item);
  result.underperform = _(item).filter(function (freelancer) {
    return freelancer.income <= result.average;
  }).sortBy('income').valueOf();
  result.overperform = _(item).filter(function (freelancer) {
    return freelancer.income > result.average;
  }).sortBy('income').valueOf();
  return result;
}

module.exports = worker;