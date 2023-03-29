/**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to google.com and searches for nightwatch,
 *   verifying if the term 'The Night Watch' exists in the search results
 */

module.exports = {
  'demo test google' : function (browser) {
    browser
      .url('http://google.com')
      .waitForElementPresent('body', 1000);
  },

  'part two' : function(browser) {
    browser
    .setValue('input[name="q"]', 'nightwatch')
    .pause(1000)
    .setValue('input[name="q"]', browser.Keys.ENTER)
    .assert.containsText('#main', 'nightwatch')
    .end();
  }
};