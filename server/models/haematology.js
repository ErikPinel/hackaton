const mongoose=require('mongoose');


const HaematologySchema=mongoose.Schema({
    current:{
        total:Number,
        time: Number
        }
});


const Haematology = mongoose.model('haematology',HaematologySchema);
module.exports=Haematology;
