import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { mount } from "enzyme"
import toJson from "enzyme-to-json"
import withDispatch from "../withDispatch"

describe("withDispatch", () => {
  it("dispatches an action when the component mounts", () => {
    const actionCreator = jest.fn()
    actionCreator.mockReturnValue({ type: "mocked_action" })

    const Wrapped = props => <span {...props} />

    mount(
      <Provider store={createStore(() => {})}>
        {React.createElement(withDispatch(actionCreator)(Wrapped))}
      </Provider>,
    )
    expect(actionCreator.mock.calls.length).toBe(1)
  })

  it("render the wrapped component", () => {
    const actionCreator = jest.fn()
    actionCreator.mockReturnValue({ type: "mocked_action" })

    const Wrapped = props => <span {...props} />

    const component = mount(
      <Provider store={createStore(() => {})}>
        {React.createElement(withDispatch(actionCreator)(() => <Wrapped key="overriden_prop" />))}
      </Provider>,
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
