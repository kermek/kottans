var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();
process.stdin.pipe(tr).pipe(process.stdout);
var stream = tr.select('.loud').createStream();
stream.pipe(through(write)).pipe(stream);
function write(buf) {
  this.queue(buf.toString().toUpperCase());
}