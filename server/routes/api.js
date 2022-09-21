const express=require('express');
const CurrentAmount = require('../models/currentmount');
const Todo = require('../models/todo');
const Users = require('../models/users');
const router= express.Router();




router.get('/todos',(req,res,next)=>{
Todo.find({},'action')
.then((data)=> res.json(data))
.catch(next)


})

router.post('/todos',(req,res,next)=>{
    req.body.action?
    Todo.create(req.body)
    .then((data)=>res.json(data))
    .catch(next) 
    : res.json({error: "invalid input"}) 
    
})


router.delete('/todos/?:id',(req,res,next)=>{
    Todo.findOneAndDelete({_id:req.params.id})
    .then((data)=>res.json(data))
    .catch(next);
})


//users

router.get('/users',(req,res,next)=>{
    Users.find({})
    .then((data)=> res.json(data))
    .catch(next)
    
    
    })
    
    router.post('/users',(req,res,next)=>{
        req.body?
        Users.create(req.body)
        .then((data)=>res.json(data))
        .catch(next) 
        : res.json({error: "invalid input"}) 
        
    })
    
    
    router.delete('/users/?:id',(req,res,next)=>{
        Users.findOneAndDelete({_id:req.params.id})
        .then((data)=>res.json(data))
        .catch(next);
    })
    

// current amount



router.get('/currentamount',(req,res,next)=>{
    CurrentAmount.find({})
    .then((data)=> res.json(data))
    .catch(next)
    
    
    })
    
    router.post('/currentamount',(req,res,next)=>{
        req.body?
        CurrentAmount.create(req.body)
        .then((data)=>res.json(data))
        .catch(next) 
        : res.json({error: "invalid input"}) 
        
    })
    
    
    router.delete('/currentamount/?:id',(req,res,next)=>{
        CurrentAmount.findOneAndDelete({_id:req.params.id})
        .then((data)=>res.json(data))
        .catch(next);
    })
    


module.exports= router;