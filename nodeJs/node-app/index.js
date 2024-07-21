const express = require('express')
const fs = require('fs')
const users = require('./users.json')
const { userInfo } = require('os')

const app = express()

//midleware
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send('hello')
})
app.get('/users',(req,res)=>{
    const html = `
        <ul>
        ${users.map((user)=> `<li>${user.first_name}</li>`)}
        </ul>
    `
    res.send(html)
})
app.get('/api/users',(req,res)=>{
    res.send(users)
})

app.get('/api/users/:id',(req,res)=>{
    const user  = users.find((user)=> user.id == req.params.id)
    res.send(user)
})

app.get('/about',(req,res)=>{
    res.send(`hello ${req.query.name}`)
})


//post

app.post('/api/createuser',(req,res)=>{
    const body = req.body
    console.log(body)
    users.push({id:users.length+1, ...body});
    fs.writeFile('./users.json', JSON.stringify(users), (err,data)=>{
        return res.json({status:'success',id: users.length})
    })

})

//delete
app.delete('/api/deleteuser/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id)
   
    const newUsers = users.filter((user)=>user.id!=id)
    fs.writeFile('./users.json', JSON.stringify(newUsers), (err,data)=>{
        return res.json({status:'deleted',id: id})
    })
})

//update
app.put('/api/user/update/:id',(req,res)=>{
    const id = req.params.id
    const body = req.body
    console.log(id,body)
    const index = users.findIndex((user)=> user.id == id)
    console.log('index:',index)
    users[index] = {id:id,...body};
    fs.writeFile('./users.json', JSON.stringify(users), (err,data)=>{
        res.send('updated user id')
    })
    
})



app.listen(3000,()=>{
    console.log('server started')
})