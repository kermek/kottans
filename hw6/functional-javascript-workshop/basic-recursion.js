module.exports = function reduce(arr, fn, initial) {
  if (!arr.length) return initial;
  var head = arr[0];
  fn(initial, head, 0, arr);
  var tail = arr.slice(1);
  return reduce(tail, fn, initial);
}