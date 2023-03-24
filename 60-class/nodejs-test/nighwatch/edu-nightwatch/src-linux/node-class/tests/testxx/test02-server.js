function makeServer(done) {
  var express = require('express');
  var path = require('path');
  var app = express();

  app.get('/', function (req, res) {
      res.status(200).sendFile('tests/level01/index.html', {root: path.resolve()});
  });
  var server = app.listen(3000, function () {
      var port = server.address().port;
      done()
  });
  return server;
}
  
module.exports = {
  before: function (browser, done) {
      //server = require('../../js/level01/server.js')(done) // done is a callback that executes when the server is started
      server = makeServer(done);
      //console.log('hcmoon');
    },

  after: function () {
      server.close()
  },

  'Demo test': function (browser) {
    browser
      .url('http://localhost:3000')   // visit the local url
      .waitForElementVisible('body') // wait for the body to be rendered

    browser
      .assert.containsText('body','Platform') // assert contains
      .saveScreenshot('./screenshots/screenshot-test01.png')
      .end()
  }
}