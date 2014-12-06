'use strict';

var _ = require("lodash");

var template = function (inputvar) {

  var urgent = function (date) {
    if (Date.parse(date) - 172800000 <= Date.now()) {
      return '<b>URGENT</b> ';
    } else {
      return '';
    }
  }
  var getItems = function (list) {
    return _(list).sortBy('date').reduce(function (s, d, i) {
      return s + _.template(
        '<li><%= urgent(date) %><%= todo %></li>\n',
        d,
        { 'imports': { 'urgent': urgent } });
    }, '').valueOf();
  }
  var getUsers = function (data) {
    return _.reduce(data, function (s, d, i) {
      return s + _.template(
        '<li><%= user %>\n<ul><%= getItems(data) %></ul>\n</li>\n',
        { user: i, data: d},
        { 'imports': { 'getItems': getItems } });
      }, '');
    }
    var mytemplate = '<ul>\n<%= getUsers(data) %></ul>';

    return _.template(
      mytemplate,
      { data: inputvar},
      { 'imports': { 'getUsers': getUsers } });
};

module.exports = template;