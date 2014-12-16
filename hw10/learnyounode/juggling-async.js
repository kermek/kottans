var http = require('http');
var bl = require('bl');
var str = [];
var count = 0;
var callback = function() {
  if (count == 3) {
    str.forEach(function(value) {
      console.log(value);
    });
  }
};
http.get(process.argv[2], function(res) {
  res.pipe(bl(function(err, data) {
    count++;
    str[0] = data.toString();
    callback();
  }));
});
http.get(process.argv[3], function(res) {
  res.pipe(bl(function(err, data) {
    count++;
    str[1] = data.toString();
    callback();
  }));
});
http.get(process.argv[4], function(res) {
  res.pipe(bl(function(err, data) {
    count++;
    str[2] = data.toString();
    callback();
  }));
});