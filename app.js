const express = require('express');
const app=express();
const router=require('./routes/login');
const router2=require('./routes/messages');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.use('/login',router);
app.use('/',router2);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);