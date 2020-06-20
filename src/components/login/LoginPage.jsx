import React from 'react';
import LoginForm from './LoginForm'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as loginActions from '../../actions/loginActions'
import * as flashActions from '../../actions/flashMessages'
import * as storageUserActions from '../../actions/storageUserActions'


class LoginPage extends React.Component {
  render(){
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <LoginForm loginActions={this.props.loginActions} storageUserActions={this.props.storageUserActions} flashActions={this.props.flashActions}/>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    loginActions:bindActionCreators(loginActions,dispatch),
    flashActions:bindActionCreators(flashActions,dispatch),
    storageUserActions:bindActionCreators(storageUserActions,dispatch)
  }
}
export default connect(null,mapDispatchToProps)(LoginPage)



