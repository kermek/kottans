module.exports = function curryN(fn, n) {
  n = n || fn.length;
  function curry(prev) {
    return function (arg) {
      var args = prev.concat(arg);
      if (args.length === n) return fn.apply(this, args);
      return curry(args);
    };
  }
  return curry([]);
}