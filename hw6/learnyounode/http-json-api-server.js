var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var urlParsed = url.parse(req.url, true);
  var time = new Date(urlParsed.query.iso);
  if (urlParsed.pathname.split('/').indexOf('parsetime') != -1) {
    res.write(JSON.stringify({
       'hour': time.getHours()
      ,'minute': time.getMinutes()
      ,'second': time.getSeconds()
    }));
  } else if (urlParsed.pathname.split('/').indexOf('unixtime') != -1) {
    res.write(JSON.stringify({
      'unixtime': time.getTime()
    }));
  }
  res.end();
});
server.listen(process.argv[2]);