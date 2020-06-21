import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routers';
import {BrowserRouter as  Router} from 'react-router-dom'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import rootReducer from './reducers'

import NavgationBar from './components/NavgationBar'

import {storageUserAction} from './actions/storageUserActions'
import setAuthorzationToken from './utils/setAuthorzationToken'
import jwtDecode from 'jwt-decode'
import {addFlashMessage} from './actions/flashMessages'


const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))
if(localStorage.jwtToken){
  let jwtToken=jwtDecode(localStorage.jwtToken)
  setAuthorzationToken(localStorage.jwtToken)
  store.dispatch(storageUserAction(jwtDecode(localStorage.jwtToken)))

  store.dispatch(addFlashMessage({
    type:'success',
    text:`用户${jwtToken.user}登录成功，欢迎你的加入`,
  }))
}

ReactDOM.render(
  <Provider store={ store }>
    <Router routes={routes}>
      <NavgationBar/>
      {routes}
    </Router>
  </Provider>
  ,document.getElementById('root'));
