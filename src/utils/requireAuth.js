import React from 'react'
import {connect} from 'react-redux'
import {addFlashMessage} from '../actions/flashMessages'
import {withRouter} from 'react-router-dom'

export default function (ComposedComponent){
  class Authenticate extends React.Component{
    componentWillMount(){
      if(!this.props.user){
        this.props.addFlashMessage({
          type:'danger',
          text:'请先登录'
        })
        this.props.history.push('/login')
      }
    }

    componentDidUpdate(nextProps){
      if(!nextProps.user){
        this.props.history.push('/login')
      }
    }
    
    render(){
      return(
        <ComposedComponent {...this.props}></ComposedComponent>
      )
    }
  }
  const mapStateToProps=(state)=>{
    return {
      user:state.userStore
    }
  }
  return withRouter(connect(mapStateToProps,{addFlashMessage})(Authenticate))
}