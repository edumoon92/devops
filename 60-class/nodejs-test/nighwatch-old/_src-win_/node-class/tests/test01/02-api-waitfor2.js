module.exports = {
    'demo Test': function(browser) {
      
       browser.url('http://google.com');
        
       browser.waitForElementPresent('#main');
       
       browser.waitForElementPresent('input[name="q"]');
   
       // with callback
       browser.waitForElementPresent('input[name="q"]', 1000, function() {
         // do something while we're here
         console.log('button visible');
       });
    }
  }