module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function (previous, current, index, array) {
    return previous.concat(fn(current, index, array));
  }, []);
}