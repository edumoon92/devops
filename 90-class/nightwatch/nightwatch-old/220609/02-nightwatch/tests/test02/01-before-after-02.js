module.exports = {
  before: function (browser) {
    // see https://github.com/nightwatchjs/nightwatch/blob/master/examples/globalsModule.js#L12
    browser.globals.waitForConditionTimeout = 5000;
  },
  'clearValue example test': function (browser) {

    browser
      .url('https://google.com')
      .waitForElementVisible('input[type=text]')
      .setValue('input[type=text]', 'nightwatch.js')
      .setValue('input[name="q"]', browser.Keys.ENTER)
      .expect.element('#rcnt').text.to.contain('nightwatchjs.org');

    browser
      .clearValue('input[type=text]')
      .setValue('input[type=text]', 'test')
      .setValue('input[name="q"]', browser.Keys.ENTER)
      .expect.element('#rcnt').text.to.contain("test");

  },

  after: function (browser) {
    browser.end();
  }
};