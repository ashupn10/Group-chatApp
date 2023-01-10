const express=require('express');
const controls=require('../controllers/userMessages');
const router=express.Router();
const path=require('path');
const fs=require('fs');
const bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:false}));
router.use('/user',controls.writeFile);
router.use(controls.sendMessages);


module.exports=router;