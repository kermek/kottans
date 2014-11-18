module.exports = function countWords(inputWords) {
  var obj = {};
  inputWords.reduce(function (a, b) {
    obj[b] = (obj[b] || 0) + 1;
  }, 0);
  return obj;
}