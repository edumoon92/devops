module.exports = {
  'demo Test #2': function(browser) {
    
    browser
      .url('http://google.com')
      .assert.urlContains('google')
      
    browser.waitForElementVisible('#main');
    
    browser.waitForElementVisible('input[name="q"]');

    // with callback
    browser.waitForElementVisible('input[name="q"]', 1000, function() {
      // do something while we're here
      console.log('button visible');
    });

 }
}