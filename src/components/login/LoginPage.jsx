import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import actions from '../../actions'

import LoginForm from './LoginForm'

class LoginPage extends React.Component {
  render(){
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <LoginForm loginRequest={this.props.loginRequest} addFlashMessage={this.props.addFlashMessage}/>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

const {loginRequest,addFlashMessage}=actions
const mapDispatchToProps=(dispatch)=>{
  return {
    loginRequest:bindActionCreators(loginRequest,dispatch),
    addFlashMessage:bindActionCreators(addFlashMessage,dispatch)
  }
}
export default connect(null,mapDispatchToProps)(LoginPage)



