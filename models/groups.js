//should have string name and should have owner (object_id)
var mongoose=require("mongoose")
// register model
var Schema=mongoose.Schema
var groupSchema=new Schema({
  name:{ type: String, required: true, unique: true }
  owner:{ type: String, required: true}
  members:[String]

})
// ORM
var Group=mongoose.model("Group",groupSchema)

module.exports = Group;
