var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var extension = process.argv[3];
fs.readdir(dir, function(err, list) {
  if (!err) {
    list.filter(function(file) {
      return path.extname(file) == "." + extension;
    }).map(function(file) {
      console.log(file);
    });
  }
});