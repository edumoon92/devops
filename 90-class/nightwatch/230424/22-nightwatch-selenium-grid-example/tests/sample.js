module.exports = {
  "Demo test Google": function (browser) {
    browser
      .url("http://www.ecosia.org")
      .waitForElementVisible("body", 1000)
      .setValue("input[name=q]", "nightwatch")
      .waitForElementVisible("button[type=submit]", 1000)
      .click("button[type=submit]")
      .pause(1000)
      .assert.containsText("#main", "Nightwatch.js");
  },

  after: function (browser) {
    browser.end();
  },
};