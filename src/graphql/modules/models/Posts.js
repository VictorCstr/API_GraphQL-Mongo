const {mongoose, Schema} = require('mongoose')

const schema = new Schema({
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
})

const Posts = mongoose.model('Posts', schema)

module.exports = Posts;