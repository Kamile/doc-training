const config = require("../../config.js")
const basePath = `${config.appPath}/components`

module.exports = {
  description: "Add a component",
  prompts: [
    {
      type: "directory",
      name: "path",
      message: "select the destination of the component",
      basePath,
    },
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Button",
      validate: value => {
        if (!/.+/.test(value)) {
          return "The name is required"
        }
        return true
      },
    },
    {
      type: "confirm",
      name: "connected",
      default: false,
      message: "Is it connected?",
    },
    {
      type: "list",
      name: "type",
      message: "Select the type of component",
      default: "Stateless Function",
      choices: () => ["Stateless Function", "React.Component", "React.PureComponent"],
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    let componentTemplate

    switch (data.type) {
      case "Stateless Function": {
        componentTemplate = "./component/component_func.js.hbs"
        break
      }
      default: {
        componentTemplate = "./component/component_class.js.hbs"
      }
    }

    const actions = [
      {
        type: "add",
        path: `${basePath}/{{path}}/{{name}}.js`,
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${basePath}/{{path}}/tests/{{name}}.test.js`,
        templateFile: "./component/test.js.hbs",
        abortOnFail: true,
      },
    ]

    if (data.connected) {
      actions.push({
        type: "add",
        path: `${basePath}/{{path}}/{{name}}.wrap.js`,
        templateFile: "./component/wrapper.js.hbs",
        abortOnFail: true,
      })
    }
    return actions
  },
}
