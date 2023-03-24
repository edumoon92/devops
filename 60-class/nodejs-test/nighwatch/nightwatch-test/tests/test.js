module.exports = {
    'NW test on Google' : function (client) {
      client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'Nightwatch JS')
        .waitForElementVisible('button[name=btnG]', 1000)
        .click('button[name=btnG]')
        .pause(1000)
        .assert.containsText('ol#rso li:first-child',
          'Nightwatch.js | Node.js powered End-to-End testing framework')
        .end()
    }
  }