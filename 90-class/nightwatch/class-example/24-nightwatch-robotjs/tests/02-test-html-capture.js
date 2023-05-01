module.exports = {
    'My test': function(browser) {
      browser
        .url('https://example.com')
        .waitForElementVisible('body')
        .htmlCapture('cart.html');
    }
  };