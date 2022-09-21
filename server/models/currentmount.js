const mongoose=require('mongoose');


const CurrentAmoutSchema=mongoose.Schema({
    current9:{
        
        mahlaka: Array,
        time : Date
    },
    current10:{
        
        mahlaka: Array,
        time : Date
    },
    current11:{
        
        mahlaka: Array,
        time : Date

    },
    current12:{
        
        mahlaka: Array,
        time : Date
    },
    current13:{
        
        mahlaka: Array,
        time : Date
    },
    current14:{
        
        mahlaka: Array,
        time : Date
    },
    current15:{
        
        mahlaka: Array,
        time : Date
    },
    current16:{
        
        mahlaka: Array,
        time : Date
    },
    current17:{
        
        mahlaka: Array,
        time : Date
    },
    current18:{
        
        mahlaka: Array,
        time : Date
    },
    current19:{
        
        mahlaka: Array,
        time : Date
    },
    current20:{
        
        mahlaka: Array,
        time : Date
    },
    current21:{
        
        mahlaka: Array,
        time : Date
    }
  
});


const CurrentAmount = mongoose.model('curentamount',CurrentAmoutSchema);
module.exports=CurrentAmount;
