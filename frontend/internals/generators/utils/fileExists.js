/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const config = require("../../config.js")
const fs = require("fs")

function fileExists(path, filename) {
  if (!fs.existsSync(path)) {
    return false
  }

  const directory = fs.readdirSync(`${config.appPath}/${path}`)
  return directory.indexOf(filename) >= 0
}

module.exports = fileExists
