import React from 'react';
import LoginForm from './LoginForm'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loginRequest} from '../../actions/loginActions'
import {addFlashMessage} from '../../actions/flashMessages'


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
const mapDispatchToProps=(dispatch)=>{
  return {
    loginRequest:bindActionCreators(loginRequest,dispatch),
    addFlashMessage:bindActionCreators(addFlashMessage,dispatch)
  }
}
export default connect(null,mapDispatchToProps)(LoginPage)



