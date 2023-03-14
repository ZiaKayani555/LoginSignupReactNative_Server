 const mongoose =require('mongoose');
 require('dotenv').config(); //we are telling that we are using .env file which have key
 mongoose.connect(process.env.mongo_url).then(
    ()=>{
        console.log('connection successful')
    }
 ).catch((err)=>{
    console.log('could not connect to db  '+err);
 })