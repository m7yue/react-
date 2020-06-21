import React from 'react';
import {Route} from 'react-router-dom'
import App from './components/App';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import shopPage from './components/shop/shopPage';
import requireAuth from './utils/requireAuth';

export default (
  <div className="container">
    <Route exact path='/' component={App}></Route>
    <Route exact path='/signup' component={SignupPage}></Route>
    <Route exact path='/login' component={LoginPage}></Route>
    <Route exact path='/shop' component={requireAuth(shopPage)}></Route>
  </div>
)

