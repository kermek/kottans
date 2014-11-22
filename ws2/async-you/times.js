var http = require('http');
var async = require('async');
var hostname = process.argv[2];
var port = process.argv[3];
var url = 'http://' + hostname + ':' + port;


var postData = function (id, done) {
  var post_data = JSON.stringify({
    'user_id': id
  });
  var post_options = {
    host: hostname,
    port: port,
    path: '/users/create',
    method: 'POST',
    headers: {
      'Content-Length': post_data.length
    }
  };
  var post_req = http.request(post_options, function(res) {
    var body='';
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      body += chunk.toString();
    });
    res.on('end', function () {
      done(null, body);
    });
  });
  post_req.on('error', done);
  post_req.write(post_data);
  post_req.end();
}

async.series({
  requestOne: function (done) {
    async.times(5, function (n, next) {
      postData(n + 1, function (err, data) {
        next(err, data);
      })
    }, function (err, data) {
      if (err) return done(err);
      done(null, data);
    });
  },
  requestTwo: function (done) {
    var body = '';
    http.get(url + '/users', function(res){
      res.on('data', function(chunk){
        body += chunk.toString();
      });
      res.on('end', function(){
        done(null, body);
      });
    }).on('error', function(err) {
      done(err);
    });
  }},
  function (err, result) {
    if (err) console.log(err);
    console.log(result.requestTwo);
  }
);