function repeat(operation, num) {
  //console.log('repeat num=' + num);
  if (num <= 0) return 0;
  operation();
  if (num % 10000 === 0) return 1;
  return repeat(operation, --num);
}

function trampoline(operation, num) {
  //console.log(fn);
  var i = num;
  do {
    var next = repeat(operation, i);
    i = i - (i % 10000) - 1;
    //console.log('trampoline i=' + i);
  } while ((next === 1) && (i > 0));
  return;
}

module.exports = function(operation, num) {
  //console.log(num);
  trampoline(operation, num);
  return;
}
