import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

import { decks } from './reducers/decks'

// const logger = store => next => action => {
//   console.group(action.type)
//   console.info('dispatching', action)
//   let result = next(action)
//   console.log('next state', store.getState())
//   console.groupEnd(action.type)
//   return result
// }

const allReducers = combineReducers({
  decks
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  allReducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store