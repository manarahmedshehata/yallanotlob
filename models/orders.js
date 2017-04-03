//shoud have owner
var mongoose=require("mongoose")
// register model
var Schema=mongoose.Schema
var orders=new Schema({
  order_owner:String,
  status:String,
  order_for:String,
  menu_image:String,
  order_date:date,
  resturant_name:String,
  list_invited:[String],
  list_joined:[String]
  details:[items{name:String,amount:Number,Price:Number,comment:String}]

})
// ORM
mongoose.model("orders",orders)
