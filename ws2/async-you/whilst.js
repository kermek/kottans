var http = require('http');
var async = require('async');
var url = process.argv[2];
var test = true;
var count = 0;

async.whilst(
  function () {
    return test === true;
  },
  function (done) {
    var body = '';
    http.get(url, function(res){
      res.on('data', function(chunk){
        body += chunk.toString();
      });
      res.on('end', function(){
        if (body === 'meerkat') test = false;
        count++;
        done(null);
      });
    }).on('error', function(err) {
      done(err);
    });
  },
  function (err) {
    console.log(count);
  }
);