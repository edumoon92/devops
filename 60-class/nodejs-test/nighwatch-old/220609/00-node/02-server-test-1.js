var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<input class="favorite styled\"
  type="button\"
  value=\"Add to favorites\">');
}).listen(8080);
