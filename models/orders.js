//shoud have owner
var mongoose=require("mongoose")
// register model
var Schema=mongoose.Schema
var orderSchema=new Schema({
  order_owner:{ type: String, required: true },
  status:{ type: String, required: true },
  order_for:{ type: String, required: true },
  menu_image:String,
  order_date:{ type: date, required: true },
  resturant_name:String,
  list_invited:[String],
  list_joined:[String]
  details:[items{name:{ type: String, required: true },amount:Number,Price:Number,comment:String}]

})
// ORM
var Order=mongoose.model("Order",orderSchema)



module.exports = Order;
