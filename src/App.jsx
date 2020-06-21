import React from 'react';
import {connect} from 'react-redux'
import {BrowserRouter as  Router} from 'react-router-dom'

import routes from './router'
import NavgationBar from './components/NavgationBar'

import {Provider} from 'react-redux'

class App extends React.Component {
  render(){
    const {store}=this.props
    return (
      <Provider store={ store }>
        <Router routes={routes}>
          <NavgationBar/>
          {routes}
        </Router>
      </Provider>
    )
  }
}

const mapStateTodipatch=(state)=>{
  return {
    user:state.userStore
  }
}

export default connect(mapStateTodipatch)(App);
