const testsDir = process.env.TESTS_DIRECTORY

module.exports = {
  src_folders: [`${testsDir}`],
  test_settings: {
    default: {
      launch_url: 'http://web',
      selenium_host: 'selenium-hub',
      desiredCapabilities: {
        browserName: 'chrome',
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'tests_output/screenshots',
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
    edge: {
      desiredCapabilities: {
        browserName: 'edge',
      },
    },    
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
      },
    },
    chromeDebug: {
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
    firefoxDebug: {
      desiredCapabilities: {
        browserName: 'firefox',
      },
    },
  },
}
