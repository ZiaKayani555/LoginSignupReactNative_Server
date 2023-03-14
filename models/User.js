const mongoose = require('mongoose');

//degining schema for our data
const userSchema = new mongoose.Schema({
    name : {
        type :String,
        required:true
    },
    email :{
        type :String,
        required:true,
        unique:true
    },
    password :{
        type:String,
        required:true,

    },
    DOB:{
        type:String,
        required:true
    }
});

//creating model of that schema to use that model
mongoose.model("user", userSchema);
