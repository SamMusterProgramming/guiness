const { Int32 } = require('mongodb');
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    id: Number,
    password :String ,
    profileImg :String,
    email: String
})

const userModel = mongoose.model("users",userSchema);

module.exports = userModel ;