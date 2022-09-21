const mongoose=require('mongoose');


const HaematologySchema=mongoose.Schema({
    current9:{
        
        time : Date,
        total:Number
    },
    current10:{
        
        time : Date,
        total:Number
    },
    current11:{
        
        time : Date,
        total:Number
    },
    current12:{
        
        time : Date,
        total:Number
    },
    current13:{
        
        time : Date,
        total:Number
    },
    current14:{
        
        time : Date,
        total:Number
    },
    current15:{
        
        time : Date,
        total:Number
    },
    current16:{
        
        time : Date,
        total:Number
    },
    current17:{
        
        time : Date,
        total:Number
    },
    current18:{
        
        time : Date,
        total:Number
    },
    current19:{
        
        time : Date,
        total:Number
    },
    current20:{
        
        time : Date,
        total:Number
    },
    current21:{
        
        time : Date,
        total:Number
    }

  
});


const Haematology = mongoose.model('haematology',HaematologySchema);
module.exports=Haematology;
