module.exports = {
    'demo test news' : function (browser) {
      browser
        .url('https://news.ycombinator.com/')
        .waitForElementVisible('.hnname')
        .assert.containsText('.hnname', 'Hacker News');
    }
  };