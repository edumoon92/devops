module.exports = {
  'demo Test': function(browser) {
    
     browser.url('https://www.naver.com');
      
     browser.waitForElementVisible('#search');
     
     browser.waitForElementVisible('input[name="query"]');
 
     // with callback
     browser.waitForElementVisible('input[name="query"]', 1000, function() {
       // do something while we're here
       console.log('button visible');
     });
  }
}
