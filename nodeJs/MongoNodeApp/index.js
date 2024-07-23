const express  = require('express')
const mongoose = require('mongoose')


const app = express()
app.use(express.urlencoded({extended:false}))
//connect mongodb
mongoose.connect('mongodb://127.0.0.1:27017/my-students').then(()=>{
    console.log('mongodb Connected')
}).catch((err)=>{
    console.log(err)
})
//schema
const userSchema = mongoose.Schema({
    firstName:{
        type: String, 
        require: true
    },
    lastName:{
        type: String, 
    },
    email:{
        type: String, 
        require: true
    }
})

//model
const User = mongoose.model('app_users', userSchema)

app.get('/',(req,res)=>{
    res.send('mongo App Home')
})

app.post('/api/user',async (req,res)=>{
    const body = req.body
    const result = await User.create({
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email
    })
    console.log('result', result)
    return res.status(201).json({msg:'sucess'})
});

app.listen(3001,()=>{
    console.log('srever Started');
})