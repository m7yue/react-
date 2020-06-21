import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from '../actions/loginActions'
import {clearFlashMessage} from '../actions/flashMessages'

class NavgationBar extends React.Component {
  handlerLogOut=(e)=>{
    this.props.logOut()
    this.props.clearFlashMessage()
  }
  render(){
    const logOut=(
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to='/' onClick={this.handlerLogOut}>退出</Link>
        </li>
      </ul>
    )
    const loginIn=(
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/signup">注册</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">登录</Link>
        </li>
      </ul>
    )
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">首页</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="mynav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mynav">
            {this.props.user?logOut:loginIn}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateTodipatch=(state)=>{
  return {
    user:state.userStore
  }
}

export default connect(mapStateTodipatch,{logOut,clearFlashMessage})(NavgationBar);
