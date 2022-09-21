const mongoose=require('mongoose');


const CurrentAmoutSchema=mongoose.Schema({
    current9:{
        type:Number,
        required:true,
        default: 0
    },
    current10:{
        type:Number,
        required:true,
        default: 0

    },
    current11:{
        type:Number,
        required:true,
        default: 0

    },
    current12:{
        type:Number,
        required:true,
        default: 0
    },
    current13:{
        type:Number,
        required:true,
        default: 0
    },
    current14:{
        type:Number,
        required:true,
        default: 0
    },
    current15:{
        type:Number,
        required:true,
        default: 0
    },
    current16:{
        type:Number,
        required:true,
        default: 0
    },
    current17:{
        type:Number,
        required:true,
        default: 0
    },
    current18:{
        type:Number,
        required:true,
        default: 0
    },
    current19:{
        type:Number,
        required:true,
        default: 0
    },
    current20:{
        type:Number,
        required:true,
        default: 0
    },
    current21:{
        type:Number,
        required:true,
        default: 0
    },
    current21:{
        type:Number,
        required:true,
        default: 0
    }
});


const CurrentAmount = mongoose.model('curentamount',CurrentAmoutSchema);
module.exports=CurrentAmount;
