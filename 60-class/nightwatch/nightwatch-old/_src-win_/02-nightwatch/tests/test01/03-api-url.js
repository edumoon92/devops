module.exports = {
    'demo test google' : function (browser) {
      browser
        .url('http://google.com')
        .waitForElementPresent('body', 1000);
    },
  
    'part two' : function(browser) {
      browser
      .waitForElementVisible('input[name="q"]')
      .setValue('input[name="q"]', 'nightwatch')
      .pause(1000)
      .setValue('input[name="q"]', browser.Keys.ENTER)
      .assert.containsText('#main', 'nightwatch')
      .end();
    }
  };