import axios from 'axios'

const setAuthorzationToken=(token)=>{
  if(token){
    axios.defaults.headers.common['Authorzation']=`7yue ${token}`
  }else{
    delete axios.defaults.headers.common['Authorzation']
  }
}

export default setAuthorzationToken