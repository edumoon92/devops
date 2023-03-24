module.exports = {
    'part 1' : function(browser) {
      browser
      //.waitForElementVisible('button[aria-label="나중에 하기"]')
      .click('button[aria-label="나중에 하기"]')
      .setValue('input[name="q"]', 'nightwatch')
      .pause(1000)
      .setValue('input[name="q"]', browser.Keys.ENTER)
      .assert.containsText('#main', 'nightwatch')
      .end();
    }
};