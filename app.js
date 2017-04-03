var express=require('express');
var app=express();
var http=require('http');
var server=http.createServer(app);
var fs=require("fs")

//for using Socket io
var socketIo=require('socket.io')(server);

//Import Controllers
var orderController=require("./controllers/auth");
var userController=require("./controllers/friends");
var groupController=require("./controllers/groups");
var orderController=require("./controllers/orders");
var orderController=require("./controllers/notifications");

// Import models files
var files_arr=fs.readdirSync(__dirname+"/models")
files_arr.forEach(function(file){
   require(__dirname+"/models/"+file);
});

//Import Public folder
app.use(express.static("public"));

//For views
app.set("view engine","ejs");
app.set("views","./views");

//define mongoose DB
var mongoose=require("mongoose")
//connecting to db
mongoose.connect("mongodb://127.0.0.1:27017/yallanotlob");


// Rounting determine Controller



server.listen(7070, function(){
	console.log("start listening...");
})

