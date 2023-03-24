const chromedriver = require("chromedriver");
//const geckodriver = require("geckodriver");
const SCREENSHOT_PATH = "./screenshots/";

module.exports = {
  "src_folders": [
    "tests/test04" // Where you are storing your Nightwatch e2e/UAT tests
  ],

  "page_objects_path" : ["page_objects"],

  webdriver: {
    start_process: true,
    port: 9515,
    server_path: chromedriver.path,
    cli_args: [
      // very verbose geckodriver logs
      "--verbose"
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

      desiredCapabilities: {
        browserName : "chrome",
        javascriptEnabled : true,
        acceptSslCerts : true,
        chromeOptions : {
          args: [
            "headless"
          ]
        }
      }
    }
  }
}