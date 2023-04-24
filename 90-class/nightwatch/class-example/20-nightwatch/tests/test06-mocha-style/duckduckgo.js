describe('ecosia example', function() {
  it('Search Nightwatch.js and check results', function(browser) {
    browser
      .url('https://www.ecosia.org/')
      .setValue('input[type=search]', 'nightwatch')
      .click('button[type=submit]')
      .assert.containsText('#main', 'Nightwatch.js')
      .end();
  }); 
});