module.exports = {
    'TC1.1 쿠팡' : function (browser) {
      browser
        .url('https://www.coupang.com/')
        .waitForElementPresent('body', 1000);
    },
  
    'part two' : function(browser) {
      browser
      .setValue('#headerSearchKeyword', ['라면', browser.Keys.ENTER])
      .assert.containsText('.search-product-wrap', '라면')
      .end();
    }
  };