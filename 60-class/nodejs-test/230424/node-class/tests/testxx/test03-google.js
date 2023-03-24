module.exports = {
    'Google Search' : function (browser) {
      browser
        .url('https://www.google.com')
        .waitForElementVisible('input[name="q"]', 4000)
        .setValue('input[name="q"]', 'software testing')
        .saveScreenshot('./screenshots/inputText.png')
        .setValue('input[name="q"]', browser.Keys.ENTER)
        .waitForElementVisible('#resultStats', 4000)
        .assert.urlContains('q=software+testing')
        .saveScreenshot('./screenshots/searchResult.png')
        .end();
    }
}