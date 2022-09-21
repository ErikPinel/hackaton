const express=require('express');
const Oncology = require('../models/oncology');
const router= express.Router();

router.get('/oncology',(req,res,next)=>{
    Oncology.find({})
    .then((data)=> res.json(data))
    .catch(next)
    })
    
    router.post('/oncology',(req,res,next)=>{
        req.body?
        Oncology.create(req.body)
        .then((data)=>res.json(data))
        .catch(next) 
        : res.json({error: "invalid input"}) 
    })
    
    router.patch('/oncology/?:id',(req,res,next)=>{
        Oncology.put({_id:req.params.id}, )
        .then((data)=>res.json(data))
        .catch(next);
    })




module.exports= router;