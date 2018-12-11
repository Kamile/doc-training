import App from "../App"
import AppWrapper from "../App.wrap"

describe("AppWrapper", () => {
  it("does not change the wrapped component", () => {
    expect(AppWrapper).toBe(App)
  })
})
