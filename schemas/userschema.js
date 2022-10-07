//we import mongoose
const mongoose = require('mongoose');

//gives us the structure or information of the database(it structures an object of a user)
//(we provide only the keywordslike name,email,etc, if we provide the value it become permanent,
// so we take the value from the user)
const userSchema = mongoose.Schema({
  // userSchema is a variable, can be 
  // mongoose.Schema is defining a structure
  name:{
    type:String,  
    required:false,
  },

  phoneNumber:{
    type:Number,

  },

  email:{
    type:String,
    required:true,
    unique:true
  },


  password:{
    type:String,
    required:false
  }

},
{timestamps:true})            

const userModel = mongoose.model('Users', userSchema)//creating a collection(called Users) in our database or a folder(which is going to contain info from the userSchema, ie name,type,etc) where we are going to store all these called (Users) and storing them and export it 
module.exports = userModel;
// you are exporting(userModel,which is a variable)and the (userschema) and making it accessible  



//schema or model is the database and its structure