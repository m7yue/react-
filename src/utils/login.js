const isEmpty=require('lodash/isEmpty')
const validator=require('validator')


const validatorInput=(data)=>{
  let errors={}
  if(validator.isEmpty(data.username)){
    errors.username='请填写用户名'
  }
  if(validator.isEmpty(data.password)){
    errors.password='请填写密码'
  }
  return {
    errors,
    isValid:isEmpty(errors)
  }
}

export default validatorInput