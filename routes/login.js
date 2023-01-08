const express=require('express');
const router=express.Router();
const path=require('path');
const bodyParser=require('body-parser');
bodyParser.urlencoded({extended:false});
router.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','login.html'));
})

module.exports=router;