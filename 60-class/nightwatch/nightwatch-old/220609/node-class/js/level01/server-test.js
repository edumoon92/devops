function makeServer () {
var express = require('express');
var path = require('path');
    var app = express();
  
    app.get('/', function (req, res) {
        res.status(200).sendFile(`index.html`, {root: path.resolve()});
    });
    var server = app.listen(3000, function () {
        var port = server.address().port;
    });
    return server;
}
makeServer();
