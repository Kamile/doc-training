const config = require("../../config.js")
const fileExists = require("../utils/fileExists")

module.exports = {
  description: "Add an actions file",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      validate: value => {
        if (/.+/.test(value)) {
          return fileExists(`modules/${value}`, `${value}.actions.js`)
            ? `modules/${value}/${value}.actions.js already exists`
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
        path: `${config.appPath}/modules/{{name}}/{{name}}.actions.js`,
        templateFile: "./modules/action.js.hbs",
        abortOnFail: true,
      },
    ]

    return actions
  },
}
