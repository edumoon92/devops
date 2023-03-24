module.exports = {
    src_folders : ["tests"],
    page_objects_path: 'page_objects',
   
    "selenium" : {
        "start_process" : true,
        "server_path" : "./selenium/selenium-server-standalone-3.14.0.jar",
        "start_session" : true,
        "log_path" : "",
        "host" : "127.0.0.1",
        "port" : 9515,
        "cli_args" : {
            "webdriver.chrome.driver" : "./selenium/chromedriver.exe",
            "webdriver.gecko.driver" : "./selenium/geckodriver.exe",
            "webdriver.ie.driver" : "./selenium/IEDriverServer_Win32_3.14.0.exe",
            "webdriver.edge.driver" : "./selenium/MicrosoftWebDriver.exe"
         }
    },
    
    "test_workers": {
        "enabled": false,
        "workers": "auto"
    },

    "test_settings" : {

        "default" : {
            "launch_url" : "http://localhost",
            "selenium_port" : 9515,
            "selenium_host" : "127.0.0.1",
            //"skip_testcases_on_fail": false,
            "globals": {
                "waitForConditionTimeout": 10000 // slow so wait.
            },
            "screenshots": {
                "enabled" : true,
                "on_failure" : true,
                "on_error" : false,
                "path" : "screenshots"
            },
        },

        "crn": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true,
                "chromeOptions": {
                    "w3c": false
                }
            }
        },

        "crh": {
            "desiredCapabilities": {
                "selenium_port" : 9515,
                "selenium_host" : "127.0.0.1",
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true,
                "chromeOptions": {
                    "args": ["disable-gpu", "--start-maximized", "--headless"],
                    "w3c": false
                }
            }
        },

        "ffn": {
            "desiredCapabilities": {
                "browserName": "firefox",
                "marionette": true,
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }   
        },

        "ffh": {
            "desiredCapabilities" : {
                "browserName" : "firefox",
                "marionette": true,
                "moz:firefoxOptions": {
                    "args": [ "-headless" ]
                },
                "alwaysMatch": {
                    "acceptInsecureCerts": true,
                }
            }
        },

        "edge": {
            "desiredCapabilities": {
                "browserName": "MicrosoftEdge",
                "acceptSslCerts": true
            }
        },
        
        "ie11": {
            "desiredCapabilities": {
              "browserName": "internet explorer",
              "version": "11",
              "javascriptEnabled": true,
              "acceptSslCerts": true,
              "allowBlockedContent": true,
              "ignoreProtectedModeSettings": true
            }
        }
    }
}