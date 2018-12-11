const config = require("../../config.js")
const fileExists = require("../utils/fileExists")

module.exports = {
  description: "Add an services file",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      validate: value => {
        if (/.+/.test(value)) {
          return fileExists(`modules/${value}`, `${value}.services.js`)
            ? `modules/${value}/${value}.services.js already exists`
            : true
        }

        return "The name is required"
      },
    },
  ],
  actions: data => {
    const services = [
      {
        type: "add",
        path: `${config.appPath}/modules/{{name}}/{{name}}.services.js`,
        templateFile: "./modules/service.js.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${config.appPath}/modules/{{name}}/tests/{{name}}.services.test.js`,
        templateFile: "./modules/service.test.js.hbs",
        abortOnFail: true,
      },
    ]

    return services
  },
}
