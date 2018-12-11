const config = require("../../config.js")
const componentExists = require("../utils/componentExists")

module.exports = {
  description: "Add a component",
  prompts: [
    {
      type: "list",
      name: "path",
      message: "select the destination of the component",
      default: "components",
      choices: () => ["components", "components/pages", "components/form"],
    },
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Button",
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(`components/${value}`)
            ? "A component with this name already exists"
            : true
        }

        return "The name is required"
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
        path: `${config.appPath}/{{path}}/{{name}}/{{name}}.js`,
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${config.appPath}/{{path}}/{{name}}/{{name}}.wrap.js`,
        templateFile: "./component/wrapper.js.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${config.appPath}/{{path}}/{{name}}/index.js`,
        templateFile: "./component/index.js.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${config.appPath}/{{path}}/{{name}}/tests/{{name}}.test.js`,
        templateFile: "./component/test.js.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${config.appPath}/{{path}}/{{name}}/tests/{{name}}.wrap.test.js`,
        templateFile: "./component/wrapper.test.js.hbs",
        abortOnFail: true,
      },
    ]

    return actions
  },
}
