import React, { Fragment } from 'react';
import {connect} from 'react-redux'

import FlashMessagesList from './flash/FlashMessagesList'

class HomePage extends React.Component {
  componentDidMount(){
    const {history,user} = this.props
    if(!user){
      history.push('./login')
    }
  }
  componentDidUpdate(){
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

export default connect(mapStateTodipatch)(HomePage);
