//should have string name ,email
var mongoose=require("mongoose")
// register model
var Schema=mongoose.Schema
var users=new Schema({
  name:String,
  email:String,
  password:String,
  friends:[String],
  groups:[String]
})
// ORM
mongoose.model("users",users)
