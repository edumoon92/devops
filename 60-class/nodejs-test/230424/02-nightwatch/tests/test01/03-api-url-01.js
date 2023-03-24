module.exports = {
    'test Naver #1.1' : function(browser) {
      browser
      .url('https://www.naver.com')
      .waitForElementPresent('body', 1000)
      .setValue('#query', 'nightwatch')
      .pause(1000)
      .setValue('#query', browser.Keys.ENTER)
      .end();
    },

    'test Naver #1.2' : function(browser) {
      browser
      .url('https://www.naver.com')
      .waitForElementPresent('body', 1000)      
      .setValue('input[name="query"]', 'nightwatch')
      .pause(1000)
      .setValue('input[name="query"]', browser.Keys.ENTER)
      .end();
    },  

    'test Naver #1.3' : function(browser) {
      browser
      .url('https://www.naver.com')
      .waitForElementPresent('body', 1000)      
      .setValue('input[type="text"]', 'nightwatch')
      .pause(1000)
      .setValue('input[name="text"]', browser.Keys.ENTER)
      .end();
    },
    
    'test Naver #1.4' : function(browser) {
      browser
      .url('https://www.naver.com')
      .waitForElementPresent('body', 1000)      
      .setValue('input.input_text', 'nightwatch')
      .pause(1000)
      .setValue('input.input_text', browser.Keys.ENTER)
      .end();
    }  
  };