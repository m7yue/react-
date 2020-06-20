import {combineReducers} from 'redux'
import auth from './auth'
import flashMessages from './flashMessages'
import userStore from './userStore'

const rootReducer=combineReducers({
  auth,
  flashMessages,
  userStore
}) 

export default rootReducer