import { createStore, applyMiddleware } from "redux"
import { routerMiddleware } from "react-router-redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction"
import createReducer from "modules/reducers"
import rootSaga from "modules/sagas"

export const onError = error => {
  // For some reason, exceptions thrown in sagas do not say what is the error.
  // Logging the error gives more information
  console.error(error) // eslint-disable-line no-console
  throw error
}

export const sagaMiddleware = createSagaMiddleware({
  // eslint-disable-next-line no-console
  onError,
})

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)]

  const enhancer = composeWithDevTools(applyMiddleware(...middlewares))

  const store = createStore(createReducer(), initialState, enhancer)

  sagaMiddleware.run(rootSaga)

  return store
}
