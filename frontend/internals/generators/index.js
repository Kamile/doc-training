/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const componentGenerator = require("./component/index.js")
const moduleGenerator = require("./modules/index.js")
const promptDirectory = require("inquirer-directory")

module.exports = plop => {
  plop.setPrompt("directory", promptDirectory)
  plop.setGenerator("component", componentGenerator.full)
  plop.setGenerator("component:nest", componentGenerator.nest)
  plop.setGenerator("module:saga", moduleGenerator.saga)
  plop.setGenerator("module:selectors", moduleGenerator.selector)
  plop.setGenerator("module:actions", moduleGenerator.action)
  plop.setGenerator("module:reducer", moduleGenerator.reducer)
  plop.setGenerator("module:services", moduleGenerator.service)

  plop.addHelper("directory", comp => `components/${comp}`)
  plop.addHelper("curly", (object, open) => (open ? "{" : "}"))
}
