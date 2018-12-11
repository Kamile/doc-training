import React from "react"
import { mount } from "enzyme"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"
import configureStore from "redux-mock-store"

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
const mockStore = configureStore(middlewares)

const mountAndFind = target => Wrapper => {
  const store = mockStore({})
  const wrapper = mount(<Provider store={store}>{Wrapper}</Provider>)
  const component = wrapper.find(target)

  return {
    wrapper,
    component,
    store,
  }
}
export default mountAndFind
