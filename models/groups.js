//should have string name and should have owner (object_id)
var mongoose=require("mongoose")
// register model
var Schema=mongoose.Schema
var groups=new Schema({
  name:String,
  owner:String,
  users:[String]

})
// ORM
mongoose.model("groups",groups)
