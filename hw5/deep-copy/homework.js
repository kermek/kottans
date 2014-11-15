'use strict';

var deepCopy = function(source) {
  var out;
  if (Object.prototype.toString.call(source) === '[object Array]') {
    out = [];
    for (var i = 0; i < source.length; i++) {
      out[i] = deepCopy(source[i]);
    }
    return out;
  } else if(typeof source === 'object') {
    if (source === null) return null;
    out = {};
    for (var key in source) {
      out[key] = deepCopy(source[key]);
    }
    return out;
  }
  return source;
};