const express = require('express')
const router = express.Router()
const {UserModel} = require('../models/user')

router.get("/", async (req,res)=>{
    const AllUsers = await UserModel.find({})
    return res.json(AllUsers)
})

router.post('/create',async (req,res)=>{
    const body = req.body
    const result = await UserModel.create({
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email
    })
    console.log(result) ;
    return res.status(201).json('user created')
})

router.route('/:id')
.get(async (req,res)=>{
    const id  = req.params.id;
    const user = await UserModel.findById(id)
    if(!user) return res.status(404).json({error:'user not found'})
    return res.json(user)
})




module.exports = router;

