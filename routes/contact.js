const express=require('express');
const path=require('path');
const controls=require('../controllers/userMessages');
const router=express.Router();
router.use('/form',controls.successPage);

router.use(controls.contactForm);

module.exports=router;