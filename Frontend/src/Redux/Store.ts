import {combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { authReducer } from './AuthState'


// Creating reducers object from all our reducers: 
const reducers = combineReducers({
  authState: authReducer
  // productsState: productsReducer 
})

const store = createStore(reducers, composeWithDevTools())

export default store 