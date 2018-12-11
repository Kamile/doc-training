import { combineReducers } from "redux"
import language from "./language/language.reducer"
import route from "./routing/routing.reducer"

export default function createReducer() {
  /*
   * You can add your new reducers below.
   */
  return combineReducers({
    route,
    language,
  })
}
