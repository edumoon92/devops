module.exports = {
  '@tags': ['mobile-web'],

  'Mobile web browser test': function (browser) {
    browser
      // Set the device to a mobile view
      .resizeWindow(360, 640)
      // Navigate to the website to be tested
      .url('https://www.example.com')
      // Assert that the title of the page contains the expected text
      .assert.titleContains('Example Domain')
      // End the test
      .end();
  }
};