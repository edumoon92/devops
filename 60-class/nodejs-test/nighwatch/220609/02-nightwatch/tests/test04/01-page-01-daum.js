module.exports = {
    'Test': function (browser) {
      var daum = browser.page.daum();
  
      daum.navigate()
        .assert.title('Daum')
        .assert.visible('@searchBar')
        .setValue('@searchBar', 'nightwatch')
        .click('@submit');
  
      browser.end();
    }
  };