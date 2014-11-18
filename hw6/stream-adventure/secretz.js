var zlib = require('zlib');
var through = require('through');
var cipher = process.argv[2];
var phrase = process.argv[3];
var crypto = require('crypto');
var stream = crypto.createDecipher(cipher, phrase);
var tar = require('tar');
var parser = tar.Parse();

parser.on('entry', function (entry) {
  if (entry.type === 'File') {
    var md5 = crypto.createHash('md5', { encoding: 'hex'});
    entry.pipe(md5).pipe(through(null, end)).pipe(process.stdout);
  }
  function end() {
    this.queue(' ').queue(entry.path).queue('\n');
  }
});

process.stdin
        .pipe(stream)
        .pipe(zlib.createGunzip())
        .pipe(parser);