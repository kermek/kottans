module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function (previous, current, index, array) {
    previous.push(fn(current));
    return previous;
  }, []);
}