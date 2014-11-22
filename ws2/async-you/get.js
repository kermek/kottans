var request = require('request');

module.exports = function (url, cb){
  request(url, function(error, response, body){
    if (error){
      cb(error);
    } else {
      cb(null, body);
    }
  });
};