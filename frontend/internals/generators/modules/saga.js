const config = require("../../config.js")
const fileExists = require("../utils/fileExists")

module.exports = {
  description: "Add a saga",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      validate: value => {
        if (/.+/.test(value)) {
          return fileExists(`modules/${value}`, `${value}.saga.js`)
            ? `modules/${value}/${value}.saga.js already exists`
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
        path: `${config.appPath}/modules/{{name}}/{{name}}.saga.js`,
        templateFile: "./modules/saga.js.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${config.appPath}/modules/{{name}}/tests/{{name}}.saga.test.js`,
        templateFile: "./modules/saga.test.js.hbs",
        abortOnFail: true,
      },
    ]

    return actions
  },
}
