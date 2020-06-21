import axios from 'axios'
// axios.defaults.baseURL='/api'
export const userSignupRequest=(userData)=>{
  // thunk
  return dispatch=>{
    return axios.post('/api/users',userData)
  }
}