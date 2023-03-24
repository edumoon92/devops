module.exports = {
    'Google advanced search : Elon Musk' : function(browser) {
        const mainQuerySelector = 'input[name="as_q"]';
        const mainQuery = 'Elon Musk';
    
        browser
            .url('http://www.google.com/advanced_search')
            .waitForElementVisible(mainQuerySelector, 2000)
            .setValue(mainQuerySelector, mainQuery)
            .saveScreenshot('screenshots/test02/test02-screenshots-google-advanced-1.png')
            .click('input[type="submit"]')
            .assert.urlContains('as_q=Elon+Musk', 'Query is Elon Musk')
            .saveScreenshot('screenshots/test02/test02-screenshots-google-advanced-1-results.png')
    }
}