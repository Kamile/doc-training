const config = require("../../config.js")
const fileExists = require("../utils/fileExists")

module.exports = {
  description: "Add an reducer file",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      validate: value => {
        if (/.+/.test(value)) {
          return fileExists(`modules/${value}`, `${value}.reducer.js`)
            ? `modules/${value}/${value}.reducer.js already exists`
            : true
        }

        return "The name is required"
      },
    },
  ],
  actions: data => {
    const reducer = [
      {
        type: "add",
        path: `${config.appPath}/modules/{{name}}/{{name}}.reducer.js`,
        templateFile: "./modules/reducer.js.hbs",
        abortOnFail: true,
      },
    ]

    return reducer
  },
}
