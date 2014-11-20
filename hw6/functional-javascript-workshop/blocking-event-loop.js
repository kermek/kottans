module.exports = function repeat(operation, num) {
  if (num <= 0) return;
  setTimeout(operation, 0);
  return setTimeout(repeat, 0, operation, --num);
}