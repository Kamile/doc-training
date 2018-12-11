/**
 * Component Generator
 */

/* eslint strict: ["off"] */

"use strict"

const config = require("../../config.js")
const componentExists = require("../utils/componentExists")
const sagaGenerator = require("./saga")
const selectorGenerator = require("./selector")
const actionGenerator = require("./action")
const reducerGenerator = require("./reducer")
const serviceGenerator = require("./service")

module.exports = {
  saga: sagaGenerator,
  selector: selectorGenerator,
  action: actionGenerator,
  reducer: reducerGenerator,
  service: serviceGenerator,
}
