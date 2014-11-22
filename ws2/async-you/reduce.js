var http = require('http');
var async = require('async');
var querystring = require('querystring');
var url = process.argv[2];

async.map(['one', 'two', 'three'], function (item, done) {
    var body = '';
    var query = querystring.stringify({
        'number' : item
    });
    http.get(url + '?' + query, function(res){
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
    console.log(result.reduce(function (prev, curr, index, array) {
      return prev + Number(curr);
    }, 0));
  }
);