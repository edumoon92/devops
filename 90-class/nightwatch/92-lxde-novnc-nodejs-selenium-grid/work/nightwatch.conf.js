module.exports = {
  src_folders: ["tests"],
  output_folder: "reports",
  selenium: {
    start_process: false,
    host: process.env.SELENIUM_HOST || "localhost",
    port: 4444,
    default_path_prefix: "/wd/hub",
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: "firefox",
      },
    },
  },
};