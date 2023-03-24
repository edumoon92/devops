module.exports = {
    'demo test google' : function (browser) {
      browser
        .url('http://google.com')
        .waitForElementPresent('body', 1000);
    },
  
    'part two' : function(browser) {
      browser
      .setValue('input[name="q"]', ['nightwatch', browser.Keys.ENTER])
      .assert.containsText('#main', 'nightwatch')
      .end();
    }
  };