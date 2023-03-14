const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("user");
const jwt  = require('jsonwebtoken');

require('dotenv').config();

router.post('/signup', (req, res)=>{
    res.send('this is signup page')
    console.log(req.body)
    //for  decoding of our data
    const {name , email , password , DOB} =req.body;
    if(!name || !email || !password || !DOB)
    {
        return res.status(422).send({error:"plase fill all the fieldscls"})
    }

    User.findOne({email:email})
        .then(
            async(savedUser)=>{ //if user is already registed with the email
                if(savedUser){
                    return res.status(422).send({error:"invalid cradentials"})
                }
                const user = new User({ //if user does not exist
                    name,
                    email,
                    password,
                    DOB
                })
                //now to save 
                try{
                    await user.save();
                    // res.send({masseage : "user saved successfully"})
                    const token = jwt.sign({_id :user._id}, process.env.jwt_secret)
                    res.send({token}) //will be sent to front end if exist
                }
                catch(err)
                {
                    console.log('db error ', err);
                    return res.status(422).send({err: err.masseage})
                }
            }
        )
})

module.exports = router;