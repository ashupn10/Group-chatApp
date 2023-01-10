const express=require('express');
const controls=require('../controllers/userMessages');
const router=express.Router();
const path=require('path');
const bodyParser=require('body-parser');
bodyParser.urlencoded({extended:false});
router.use(controls.sendLogin);

module.exports=router;