const express=require('express')
const isEmpty=require('lodash/isEmpty')
const validator=require('validator')
const jwt=require('jsonwebtoken')
const config=require('../config')

const router=express.Router()

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
    isValid:isEmpty(errors),
    user:data.username
  }
}

router.post('/',(req,res)=>{
  const {errors,isValid,user}=validatorInput(req.body)
  if(!isValid){
    res.status(400).json(errors) // 400 (Bad Request)
  }else{
    // res.send({success:true,data:{user}})
    const token=jwt.sign({user},config.jwtSecret)
    res.send({success:true,data:{token,user}})
  }
})


module.exports=router