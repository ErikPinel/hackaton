const mongoose=require('mongoose');


const OncologySchema=mongoose.Schema({
    current9:{

        total:Number
    },
    current10:{
        
        total:Number
    },
    current11:{
        
        total:Number
    },
    current12:{
        
        total:Number
    },
    current13:{
        
        total:Number
    },
    current14:{
        
        total:Number
    },
    current15:{
        
        total:Number
    },
    current16:{
        
        total:Number
    },
    current17:{
        
        total:Number
    },
    current18:{
        
        total:Number
    },
    current19:{
        
        total:Number
    },
    current20:{
        
        total:Number
    },
    current21:{
        
        total:Number
    }

  
});


const Oncology = mongoose.model('oncology',OncologySchema);
module.exports=Oncology;
