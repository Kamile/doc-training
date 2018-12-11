/**
 * Component Generator
 */

/* eslint strict: ["off"] */

"use strict"

const config = require("../../config.js")
const componentExists = require("../utils/componentExists")
const fullGenerator = require("./fullGenerator")
const nestGenerator = require("./nestGenerator")

module.exports = {
  full: fullGenerator,
  nest: nestGenerator,
}
