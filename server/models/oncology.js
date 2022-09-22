const mongoose=require('mongoose');


const OncologySchema=mongoose.Schema({
    current:{
        total:Number
    }
  
});


const Oncology = mongoose.model('oncology',OncologySchema);
module.exports=Oncology;
