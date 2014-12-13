module.exports = function average(...args) {
  return args.reduce((s, n) => s + n, 0) / args.length;
}