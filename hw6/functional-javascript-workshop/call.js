module.exports = function duckCount() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(previous, current, index, array) {
    return previous + Object.prototype.hasOwnProperty.call(current ,'quack');
  }, 0);
}