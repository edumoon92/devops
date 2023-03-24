module.exports = {
    before: function (browser) {
        // see https://github.com/nightwatchjs/nightwatch/blob/master/examples/globalsModule.js#L12
        browser.globals.waitForConditionTimeout = 5000;
    },

    'click example test': function (browser) {

        browser
            .url('https://google.com')
            .waitForElementVisible('input[type=text]')
            //.setValue('input[type=text]', 'nightwatch.js')
            .setValue('input[name="q"]', ['nightwatch.js', browser.Keys.ENTER])

            /*
            .click('input[type=submit]', function (result) {
                //console.log(result);
                //this.assert.strictEqual(result.status, 0);
            })
            */
            .expect.element('#rcnt').text.to.contain('nightwatchjs.org');
    },

    after: function (browser) {
        browser.end();
    }
};