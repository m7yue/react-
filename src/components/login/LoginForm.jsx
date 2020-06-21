import React from 'react';
import classnames from 'classnames'
import  {withRouter} from 'react-router-dom'
import validatorInput from '../../utils/login'
 
class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:'',
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
    const {username,password}=this.state
    const {isValid,errors}=validatorInput({username,password})
    if(!isValid){
      return this.setState({errors,isLoadding:false})
    }
    this.props.loginRequest(this.state).then((res)=>{
      // 路由跳转
      this.props.addFlashMessage({
        type:'success',
        text:`用户${res.data.data.user}登录成功，欢迎你的加入`,
      })
      this.props.history.push('/')
    },({response})=>{
      let {username} = response.data
      if(username){
        this.props.history.push('/signup')
      }else{
        this.setState({errors:response.data,isLoadding:false})
      }
    })
  }

  render(){
    const {errors,isLoadding}=this.state
    return (
      <form onSubmit={this.onSubmit}>
        <h2>欢迎 </h2>

        <div className="form-group">
          <label className="control-label">用户名</label>
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
          <label className="control-label">密码</label>
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
          <button disabled={isLoadding} className="btn btn-primary btn-lg">登录</button>
        </div>
      </form>
    );
  }
}

export default withRouter(LoginForm)

