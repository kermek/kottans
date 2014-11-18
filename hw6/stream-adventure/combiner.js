var combine = require('stream-combiner');
var through = require('through');
var split = require('split');
var zlib = require('zlib');

module.exports = function () {
  var genres = [];
  var combineByGenres = through(write, end);
  return combine(
    split(),
    through(function (text) { if (text.length > 0) this.queue(JSON.parse(text))}),
    combineByGenres,
    zlib.createGzip()
    );

  function write(buf) {
    //console.log(buf);
    //buf = JSON.parse(buf);
    if (buf.type == 'genre') {
      genres.push({
        name: buf.name, 
        books: []
      });
    } else if (buf.type == 'book') {
      var genre = genres.pop();
      genre.books.push(buf.name);
      genres.push(genre);
    }
    //console.log(genres);
  }

  function end() {
    pipe = this;
    genres.forEach(function (genre) {
      pipe.queue(JSON.stringify(genre));
      pipe.queue('\n');
    });
    this.queue(null);
  }
}