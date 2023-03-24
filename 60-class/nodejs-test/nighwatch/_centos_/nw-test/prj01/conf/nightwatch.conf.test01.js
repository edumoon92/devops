const geckodriver = require("geckodriver");
const SCREENSHOT_PATH = "./screenshots/";

module.exports = {
  "src_folders": [
    "tests/test01" // Where you are storing your Nightwatch e2e/UAT tests
  ],

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: geckodriver.path,
    cli_args: [
      // very verbose geckodriver logs
      '-vv'
    ]
  },

  test_settings: {
    default: {
      "screenshots": {
        "enabled": true,
        "path": "./screenshots",
        "on_failure": true,
        "on_error": true
      },

      desiredCapabilities : {
        browserName : 'firefox',
        alwaysMatch: {
          // Enable this if you encounter unexpected SSL certificate errors in Firefox
          // acceptInsecureCerts: true,
          'moz:firefoxOptions': {
          args: [
            '-headless',
            '-verbose'
          ],
          }
        }
      }
    }
  }
}