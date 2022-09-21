const mongoose=require('mongoose');


const CardiologySchema=mongoose.Schema({
    current:{
        total:Number,
        time: Number
        }
  
});


const Cardiology = mongoose.model('cardiology',CardiologySchema);
module.exports=Cardiology;
