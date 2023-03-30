{
    "src_folders": [
      "tests"
    ],
    "output_folder": "tests_output",
    "selenium": {
      "start_process": true,
      "server_path": "/usr/local/bin/selenium-server-standalone-3.9.0.jar",
      "log_path": "",
      "port": 4444,
      "cli_args": {
        "webdriver.chrome.driver": "node_module/.bin/chromedriver",
        "webdriver.gecko.driver": "node_module/.bin/chromedriver",
        "webdriver.opera.driver": "bin/operadriver"
      }
    },
    "test_workers": {
      "enabled": true,
      "workers": "auto"
    },
    "test_settings": {
      "default": {
        "launch_url": "http://localhost",
        "selenium_port": 4444,
        "selenium_host": "localhost",
        "silent": true,
        "screenshots": {
          "enabled": false,
          "path": ""
        },
          "desiredCapabilities": {
            "browserName": "chrome"
          }
        },
      "firefox": {
        "desiredCapabilities": {
          "browserName": "firefox",
          "marionette": true
        }
      },
      "opera": {
        "desiredCapabilities": {
          "browserName": "opera"
        }
      }
    }
  }