const express = require('express');
const bodyparser = require('body-parser');
const port  = 3000;

const app = express();
app.use(bodyparser.json());

//
require('./db');
require('./models/User')
//
const authRoutes = require('./routes/authRoutes');
app.use(authRoutes);


app.get('/', (req,res)=>{
    res.send('this is home page');
})


app.listen(port ,()=>{
    console.log('server is running');

})