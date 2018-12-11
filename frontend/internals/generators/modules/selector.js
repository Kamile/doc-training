const config = require("../../config.js")
const fileExists = require("../utils/fileExists")

module.exports = {
  description: "Add a selector file",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      validate: value => {
        if (/.+/.test(value)) {
          return fileExists(`modules/${value}`, `${value}.selectors.js`)
            ? `modules/${value}/${value}.selectors.js already exists`
            : true
        }

        return "The name is required"
      },
    },
  ],
  actions: data => {
    const actions = [
      {
        type: "add",
        path: `${config.appPath}/modules/{{name}}/{{name}}.selectors.js`,
        templateFile: "./modules/selector.js.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${config.appPath}/modules/{{name}}/tests/{{name}}.selectors.test.js`,
        templateFile: "./modules/selector.test.js.hbs",
        abortOnFail: true,
      },
    ]

    return actions
  },
}
