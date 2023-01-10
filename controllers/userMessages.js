const path=require('path');
const fs=require('fs');

exports.page404=(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
}
exports.contactForm=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','contact.html'));
}
exports.successPage=(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname,'..','views','success.html'));
}
exports.sendLogin=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','login.html'));
}
exports.writeFile=(req,res,next)=>{
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
}
exports.sendMessages=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','messages.html'));
}