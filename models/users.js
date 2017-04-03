//should have string name ,email
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema=new Schema({
  name:{type:String,required: true} 
  email: { type: String, required: true, unique: true },
  password:{type:String,required: true} 
  friends:[String],
  groups:[String]
})
// ORM

var User = mongoose.model('User', userSchema);


module.exports = User;
