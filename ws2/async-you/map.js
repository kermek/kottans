var http = require('http');
var async = require('async');

async.map(
  process.argv.slice(2),

  function (item, done) {
    var body = '';
    http.get(item, function(res){
      res.on('data', function(chunk){
        body += chunk.toString();
      });
      res.on('end', function(){
        done(null, body);
      });
    }).on('error', function(err) {
      done(err);
    });
  }, 
  
  function (err, result) {
    if (err) console.log(err);
    console.log(result);
  }
);