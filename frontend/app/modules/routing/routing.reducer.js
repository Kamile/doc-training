import { LOCATION_CHANGE } from "react-router-redux"

// Initial routing state
const routeInitialState = {
  location: null,
}

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return {
        ...state,
        location: action.payload,
      }
    default:
      return state
  }
}

export default routeReducer
