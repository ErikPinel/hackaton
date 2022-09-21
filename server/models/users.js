const mongoose=require('mongoose');


const UsersSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});


const Users = mongoose.model('users',UsersSchema);
module.exports=Users;
