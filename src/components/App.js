import React, { Fragment } from 'react';
import FlashMessagesList from './flash/FlashMessagesList'
import {connect} from 'react-redux'
class App extends React.Component {
  componentDidMount(){
    const {history,user} = this.props
    if(!user){
      history.push('./login')
    }
  }
  render(){
    return (
      <Fragment>
        <FlashMessagesList/>
        <div className="jumbotron">
          <h1>Hello</h1>
        </div>
      </Fragment>
    );
  }
}
const mapStateTodipatch=(state)=>{
  return {
    user:state.userStore
  }
}

export default connect(mapStateTodipatch)(App);
