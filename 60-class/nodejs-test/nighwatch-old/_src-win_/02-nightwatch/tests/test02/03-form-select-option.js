module.exports = {
  before: function (browser) {
    // see https://github.com/nightwatchjs/nightwatch/blob/master/examples/globalsModule.js#L12
    browser.globals.waitForConditionTimeout = 5000;
  },
  'click option from drop down list': function (browser) {
    browser
      .url('http://localhost:8081/')
      .assert.titleContains('HTML5')
      .waitForElementVisible('#select')
      .click("#select option:nth-child(1)")
      .click('input[type=submit]', function (result) {
        this.assert.strictEqual(result.status, 0);
      });
  },

  after: function (browser) {
    browser.end();
  }
};