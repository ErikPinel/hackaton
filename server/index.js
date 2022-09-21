const express =require('express');
const mongoose  = require('mongoose');
const app=express();
const port =5000;
const haematologyRoutes=require('./routes/api-haematology')
const oncologyRoutes=require('./routes/api-oncology')
const cardiologyRoutes=require('./routes/api-cardiology')
const usersRoutes=require('./routes/api-users')
require('dotenv').config();
const bodyParser=require('body-parser')
mongoose.Promise=global.Promise;


mongoose.connect(process.env.DB,{useNewUrlParser : true})
.then(()=>console.log("conected to database"))
.catch((err)=> console.log(err))



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use(bodyParser.json());
  

app.use('/api-oncology',oncologyRoutes)
app.use('/api-cardiology',cardiologyRoutes)
app.use('/api-haematology',haematologyRoutes)
app.use('/api-users',usersRoutes)
app.use((err,req,res,next)=>{
    console.log(err)
    next();
})
app.listen(port,()=>{
console.log("server is runing on port " + port)



})


