import { all } from "redux-saga/effects"
import rootSaga from "../sagas"

describe("rootSaga", () => {
  it("yields an all() effect to start sagas", () => {
    const saga = rootSaga()
    expect(saga.next().value).toEqual(all([]))
  })
})
