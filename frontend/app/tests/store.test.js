import configureStore, { onError, sagaMiddleware } from "../configureStore"

jest.mock("redux-saga", () => {
  const middleware = jest.fn().mockReturnValue(jest.fn())
  middleware.run = jest.fn()
  return jest.fn().mockReturnValue(middleware)
})

describe("onError", () => {
  it("should log the thrown errors", () => {
    /* eslint-disable no-console */
    const _error = console.error
    console.error = jest.fn()
    expect(() => onError("mocked_error")).toThrow("mocked_error")
    expect(console.error).toHaveBeenCalledWith("mocked_error")
    console.error = _error
    /* eslint-enable no-console */
  })
})

describe("configureStore", () => {
  it("should run the root saga", () => {
    configureStore()
    expect(sagaMiddleware.run).toHaveBeenCalled()
  })
})
