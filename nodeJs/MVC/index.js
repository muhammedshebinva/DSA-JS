const express = require('express');
const userRouter = require('./routes/user')
const {connectMongoDB} = require('./connections')
const PORT = 3000;
const {logReqRes} =  require('./middlewares')
const app = express()

app.use(express.urlencoded({extended:false}))
//connetcion
connectMongoDB('mongodb://127.0.0.1:27017/mvc').then(()=>{
    console.log('MongoDB connected')
})
app.use(logReqRes('log.txt'))
//routes
app.use('/users', userRouter)

app.listen(PORT,()=>{
    console.log(`server Started on PORT: ${PORT}`)
});