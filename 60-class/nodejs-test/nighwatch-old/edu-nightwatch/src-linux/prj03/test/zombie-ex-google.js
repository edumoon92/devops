'use strict'
const Browser = require('zombie');

describe('Request google.com', function() {
  const browser = new Browser();

  before(function() {
    return browser.visit('http://www.google.com');
  });

  it('Should have correct links', function(done) {
    const links = browser.queryAll('a');
    for (var link of links) {
      console.log("\n");
      console.dir(browser.text(link));
      console.dir(link.href);
    }
    done();
  });

});