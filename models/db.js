const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB' , {useNewUrlParser:true}, (err)=>{
    if(!err){
        console.log('MongoDB Connection Succeeded');
    }
    else{
        console.log('MongoDB Connection Failed: '+ err);
    }
})

require('./employee.model');