const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");

module.exports = {
  "src_folders": [
    "tests" // Where you are storing your Nightwatch e2e/UAT tests
  ],
  "output_folder": "./reports", // reports (test outcome) output by nightwatch
  "selenium": { // downloaded by selenium-download module (see readme)
    "start_process": true, // tells nightwatch to start/stop the selenium process
    "server_path": seleniumServer.path,
    //"server_path": "./selenium/selenium-server-standalone-3.14.0.jar",
    "host": "127.0.0.1",
    "port": 4444, // standard selenium port
    "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
      //"webdriver.chrome.driver" : "/usr/local/bin/chromedriver"
      "webdriver.chrome.driver" : chromedriver.path
    }
  },
  "test_settings": {
    "default": {
      "launch_url" : "http://zigocapital.dev",
      "screenshots": {
        "enabled": false, // if you want to keep screenshots
        "path": './screenshots' // save screenshots here
      },
      "globals": {
        "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
      },
      "desiredCapabilities": { // use Chrome as the default browser for tests
        "browserName": "chrome",
        "chromeOptions": {
          "args" : ["headless", "--no-sandbox"],
          "w3c": false
        }
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true // set to false to test progressive enhancement
      }
    }
  }
}
