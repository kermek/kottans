var through = require('through');
var split = require('split');
var lines = 0;
process.stdin
       .pipe(split())
       .pipe(through(line, end))
       .pipe(process.stdout);
function line(buf) {
  lines++;
  this.queue((lines % 2 == 1 
    ? buf.toString().toLowerCase() 
    : buf.toString().toUpperCase()) + '\n'
  );
}
function end() {
  this.queue(null);
}