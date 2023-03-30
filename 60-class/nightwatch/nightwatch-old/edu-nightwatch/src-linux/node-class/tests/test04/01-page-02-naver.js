module.exports = {
  'Test 2 - Naver': function (browser) {
    var page = browser.page.naver();

    page
      .navigate()
      .assert.title('NAVER')

    page
      .waitForElementVisible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .click('@submit');

    browser.end();
  }
};