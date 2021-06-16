const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({

firstName:{
    type: String,
    required: true,
    minlength:3


},
lastName:{
    type: String,
    required: true,
    minlength:3


},
    email:{

    type: String,
    required: true,
    unique:[true,"Email id already exsists"],

},
password:{

    type:String,
    require:true,


},

userType:{
        type : String,
        required: true,


},
dateCreated:{

    type :Date,
    required : true,
    
    
},
deactivated :{
   
    type : Boolean,
    required : true,


} 

})



//using model create collection


const user = new mongoose.model('Users',usersSchema);
module.exports = user;