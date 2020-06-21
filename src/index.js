import React from 'react';
import ReactDOM from 'react-dom';

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'

import {storageUserAction} from './actions/storageUserActions'
import setAuthorzationToken from './utils/setAuthorzationToken'
import {addFlashMessage} from './actions/flashMessages'
import jwtDecode from 'jwt-decode'

import App from './App'

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

const jwtToken=localStorage.jwtToken
if(jwtToken){
  let jwtTokenDecode=jwtDecode(jwtToken)
  setAuthorzationToken(jwtToken)
  store.dispatch(storageUserAction(jwtTokenDecode))

  store.dispatch(addFlashMessage({
    type:'success',
    text:`用户${jwtTokenDecode.user}登录成功，欢迎你的加入`,
  }))
}

ReactDOM.render(<App store={store}/>,document.getElementById('root'));
