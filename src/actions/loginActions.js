import axios from 'axios'

export const loginRequest=(userData)=>{
  return dispatch=>{
    return axios.post('/api/login',userData)
  }
}