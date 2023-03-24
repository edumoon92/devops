//const chromedriver = require("chromedriver");
const geckodriver = require("geckodriver");
const SCREENSHOT_PATH = "./screenshots/";

module.exports = {
  "src_folders": [
    "tests/testx1" // Where you are storing your Nightwatch e2e/UAT tests
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
      //launch_url: 'https://nightwatchjs.org',

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
