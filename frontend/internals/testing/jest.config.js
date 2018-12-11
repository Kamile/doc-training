module.exports = {
  rootDir: "../../", // the default rootDir is the jest.config.js directory
  collectCoverageFrom: [
    "app/**/*.js",
    "!app/**/*.test.js",
    "!app/**/*.e2e.js",
    "!app/**/messages.js",
    "!app/app.js",
    "!app/global-styles.js",
    "!app/**/index.js",
    "!app/tests/*",
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  moduleDirectories: ["node_modules", "app"],
  moduleNameMapper: {
    ".*\\.(css|less|styl|scss|sass)$": "<rootDir>/internals/testing/mocks/cssModule.js",
    ".*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/internals/testing/mocks/image.js",
  },
  setupFiles: ["<rootDir>/internals/testing/polyfills.js"],
  setupTestFrameworkScriptFile: "<rootDir>/internals/testing/test-bundler.js",
  testRegex: "tests/.*\\.test\\.js$",
  snapshotSerializers: ["enzyme-to-json/serializer"],
}
