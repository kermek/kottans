module.exports = function(dir, extension, callback) {
  var fs = require('fs');
  var path = require('path');
  fs.readdir(dir, function(err, list) {
    if (err) return callback(err);
    return callback(null, list.filter(function(file) {
          return path.extname(file) === '.' + extension;
    }));
  });
}