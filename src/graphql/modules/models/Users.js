const {mongoose, Schema} = require('mongoose')

const schema = new Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    fullName:{
        type: String
    },
    email:{
        type: String,
    },
    active:{
        type: Boolean,
        required: true,
    },
})

const Users = mongoose.model('Users', schema)

module.exports = Users;