const express = require('express')
require('dotenv').config()
const userRouter = require('./User/user.router')
const thoughtRouter = require('./Thought/thought.router')
const app = express()
const cors = require('cors')
const port = process.env.SERVER_PORT

//to parse json data into js
app.use(express.json())
app.use(cors())

app.use('/api/user', userRouter)
app.use('/api/thought', thoughtRouter)


app.listen(port, ()=>{
    console.log(`App is listening on Port: ${port}`)
})