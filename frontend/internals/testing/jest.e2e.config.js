module.exports = {
  rootDir: "../../", // the default rootDir is the jest.config.js directory
  testRegex: "tests/.*\\.e2e\\.js$",
  globalSetup: "<rootDir>/internals/testing/globalSetup.js",
  globalTeardown: "<rootDir>/internals/testing/globalTeardown.js",
  testEnvironment: "<rootDir>/internals/testing/puppeteer_environment.js",
}
