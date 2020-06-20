const express=require('express')
const app=express()
const users=require('./routers/users')
const login=require('./routers/login')
const debug=require('debug')("my-application")
const bodyParser=require('body-parser')

app.use(bodyParser.json())
app.use('/api/users',users)
app.use('/api/login',login)

app.listen(3030,(req,res)=>{
  debug('服务器运行在3030端口')
})