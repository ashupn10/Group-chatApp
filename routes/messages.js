const express=require('express');
const router=express.Router();
const path=require('path');
const fs=require('fs');
const bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:false}));
router.use('/user',(req,res,next)=>{
    console.log(req.body);
    let data=req.body.username+': '+req.body.Messages;
    console.log(data);
    fs.writeFile('messages.txt',data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        }
    });
    next();
})
router.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','messages.html'));
})


module.exports=router;