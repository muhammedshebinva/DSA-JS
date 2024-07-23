const mongoose  = require('mongoose')

//schema
const userSchema = mongoose.Schema({
    first_name:{
        type: String,
        required : true
    },
    last_name:{
        type: String
    },
    email:{
        type:String,
        required: true
    }
})

const UserModel = mongoose.model('mvc_users',userSchema)

module.exports = {UserModel}