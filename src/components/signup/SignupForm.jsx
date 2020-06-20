import React from 'react';
import classnames from 'classnames'
import  {withRouter} from 'react-router-dom'

class SignupForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      email:'',
      password:'',
      passwordConfirmation:'',
      errors:{},
      isLoadding:false
    }
  }

  onChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit = (e) =>{
    e.preventDefault()
    this.setState({isLoadding:true})
    console.log(this.props)
    this.props.signupActions.userSignupRequest(this.state).then(({response})=>{
      // 路由跳转
      console.log(this.props)
      this.props.flashActions.addFlashMessage({
        type:'success',
        text:'注册成功，欢迎你的加入'
      })
      this.props.history.push('/')
    },({response})=>{
      console.log(response)
      this.setState({errors:response.data,isLoadding:false})
    })
    console.log(this.state)
  }

  render(){
    const {errors,isLoadding}=this.state
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community </h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            className={classnames('form-control',{'is-invalid':errors.username})}
          />    
          {errors.username&&<span className="form-text text-muted">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            className={classnames('form-control',{'is-invalid':errors.email})}
          />
          {errors.email&&<span className="form-text text-muted">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            className={classnames('form-control',{'is-invalid':errors.password})}
          />
          {errors.password&&<span className="form-text text-muted">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label className="control-label">PasswordConfirmation</label>
          <input
            type="password"
            name="passwordConfirmation"
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            className={classnames('form-control',{'is-invalid':errors.passwordConfirmation})}
          />
          {errors.passwordConfirmation&&<span className="form-text text-muted">{errors.passwordConfirmation}</span>}
        </div>
      
        <div className="form-group">
          <button disabled={isLoadding} className="btn btn-primary btn-lg">注册</button>
        </div>
      </form>
    );
  }
}

export default withRouter(SignupForm)

