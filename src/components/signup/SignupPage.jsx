import React from 'react';
import SignupForm from './SignupForm'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {userSignupRequest} from '../../actions/signupActions'
import {addFlashMessage} from '../../actions/flashMessages'

class SignupPage extends React.Component {
  render(){
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <SignupForm userSignupRequest={this.props.userSignupRequest} addFlashMessage={this.props.addFlashMessage}/>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    userSignupRequest:bindActionCreators(userSignupRequest,dispatch),
    addFlashMessage:bindActionCreators(addFlashMessage,dispatch)
  }
}
export default connect(null,mapDispatchToProps)(SignupPage)



