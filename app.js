const express = require('express');
const path=require('path');
const controls=require('./controllers/userMessages');
const app=express();

const router=require('./routes/login');
const router2=require('./routes/messages');
const router3=require('./routes/contact.js');
const bodyParser=require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use('/login',router);
app.use('/messages',router2);
app.use('/contact',router3)
app.use(controls.page404);

app.listen(3000);