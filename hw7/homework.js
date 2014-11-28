// Your code goes here
var my_$ = function(sSelector) {
  var m = this;
  m.selector = sSelector;
  m = document.querySelectorAll(m.selector);

  m.width = function (iWidth) {
    if (arguments.length == 0) {
      var values = [];
      for (var i = 0; i < m.length; i++) {
        values.push(window.getComputedStyle(m[i]).width);
      }
      return values;
    } else {
      for (var i = 0; i < m.length; i++) {
        m[i].style.width = iWidth;
      }
      return m;
    }
  }

  m.height = function (iHeight) {
    if (arguments.length == 0) {
      var values = [];
      for (var i = 0; i < m.length; i++) {
        values.push(window.getComputedStyle(m[i]).height);
      }
      return values;
    } else {
      for (var i = 0; i < m.length; i++) {
        m[i].style.height = iHeight;
      }
      return m;
    }
  }

  m.css = function () {
    if (typeof arguments[0] === 'object') {
      var obj = arguments[0];
      var delay = arguments[1];
    } else {
      var obj = {};
      obj[arguments[0]] = arguments[1];
      var delay = arguments[2];
    }
    var setStyles = function () {
      for (var style in obj) {
        for (var i = 0; i < m.length; i++) {
          m[i].style[style] = obj[style];
        }
      }
      console.log('done ' + new Date().getTime());
    }
    if (delay === undefined) {
      setStyles();
    } else {
      setTimeout(setStyles, delay);
    }
    console.log('ready ' + new Date().getTime());
    return m;
  }
  return m;
}