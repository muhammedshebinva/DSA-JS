const express = require('express')

const app = express()

app.get("/",function(req,res){
        res.send("hello abina")
})

app.get("/address", function(req,res){
    res.send("trisure")
})






app.listen(4000, function (){
    console.log("sterver started on Port 4000")
})