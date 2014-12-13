console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(string, username, comment) {
  return string[0] + replace(username) + string[1] + replace(comment) + string[2];
}

function replace(s) {
  s = s.replace(/&/g, '&amp;');
  s = s.replace(/'/g, '&#39;');
  s = s.replace(/"/g, '&quot;');
  s = s.replace(/</g, '&lt;');
  s = s.replace(/>/g, '&gt;');
  return s;
}