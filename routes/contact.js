const express=require('express');
const path=require('path');
const router=express.Router();
router.use('/form',(req,res,next)=>{
    console.log(req.body);
    next();
})
router.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','contact.html'));
})

module.exports=router;