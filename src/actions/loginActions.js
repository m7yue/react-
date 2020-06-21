import axios from 'axios'
import setAuthorzationToken from '../utils/setAuthorzationToken'
import {storageUserAction} from './storageUserActions'
import jwtDecode from 'jwt-decode'

export const loginRequest=(userData)=>{
  return dispatch=>{
    return axios.post('/api/login',userData).then(res=>{
      const token=res.data.data.token
      localStorage.setItem('jwtToken',token)
      setAuthorzationToken(token)
      dispatch(storageUserAction(jwtDecode(token)))
      return res 
    })
  }
}

export const logOut=(userData)=>{
  return dispatch=>{
    localStorage.removeItem('jwtToken')
    setAuthorzationToken(false)
    // 取消请求头
    dispatch(storageUserAction({user:''}))
  }
}