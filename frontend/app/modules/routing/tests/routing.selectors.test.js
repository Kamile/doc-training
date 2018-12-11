import { makeSelectLocation } from "../routing.selectors"

describe("makeSelectLocation", () => {
  it("should select the location", () => {
    const route = {
      location: { pathname: "/foo" },
    }
    const mockedState = {
      route,
    }
    expect(makeSelectLocation()(mockedState)).toEqual(route.location)
  })
})
