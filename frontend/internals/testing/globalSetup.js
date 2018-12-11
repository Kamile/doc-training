const puppeteer = require("puppeteer")
const mkdirp = require("mkdirp")
const os = require("os")
const path = require("path")
const fs = require("fs")

const DIR = path.join(os.tmpdir(), "jest_puppeteer_global_setup")
const RUNNING_IN_CI = !!process.env.CI
const SLOWMO = process.env.SLOWMO

module.exports = async function() {
  const browser = await puppeteer.launch({
    headless: !SLOWMO,
    slowMo: SLOWMO,
    args: ["--no-sandbox", "--disable-setuid-sandbox"], // Needed to run on the CI docker image
    // We need to run google-chrome-unstable to run Puppeteer on the CI docker image
    executablePath: process.env.CI && "google-chrome-unstable",
  })
  // store the browser instance so we can teardown it later
  global.__BROWSER__ = browser
  mkdirp.sync(DIR)
  fs.writeFileSync(path.join(DIR, "wsEndpoint"), browser.wsEndpoint())
}
