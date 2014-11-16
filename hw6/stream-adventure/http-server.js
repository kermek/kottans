var http = require('http');
var through = require('through');
var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(write, end)).pipe(res);
  } else {
    res.end('Send me a POST\n');
  }
});
function write(buf) {
  this.queue(buf.toString().toUpperCase());
}
function end() {
  this.queue(null);
}
server.listen(process.argv[2]);