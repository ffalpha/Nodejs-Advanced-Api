const express = require("express");
const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({sucsses:true,msg:"Show All boot camp"})
});

router.get('/:id',(req,res)=>{
    res.status(200).json({sucsses:true,msg:`Get single bootcamp ${req.params.id}`})
});
router.post('/',(req,res)=>{
    res.status(200).json({sucsses:true,msg:"Create new  bootcamp"})
})
router.put('/:id',(req,res)=>{
    res.status(200).json({sucsses:true,msg:`Update bootcamp ${req.params.id}`})
});

router.delete('/:id',(req,res)=>{
    res.status(200).json({sucsses:true,msg:`Delete bootcamp ${req.params.id}`})
});
module.exports =router;