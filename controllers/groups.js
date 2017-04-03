/* Should have this functions: 
	1- Add group action
	2- Delete group
	3- Add user to group
	4- leave user from group
	5- list groups
*/
var express = require('express');
var app = express();
var Group = require('./app/models/groups');


// create a new group called os
var mygroup = new Group({
  name: 'os',
  owner: 'ehab',
  members: ['ahmed'] 
});



//Add group action
mygroup.save(function(err) {
  if (err) throw err;

  console.log('group saved successfully!');
});



// list groups
Group.find({}, function(err, groups) {
  if (err) throw err;

  // object of all the groups
  console.log(groups);
});




// Delete group
Group.findOneAndRemove({ name: 'os' }, function(err) {
  if (err) throw err;

  // we have deleted the group
  console.log('group deleted!');
});



//add user to group
Group.findOneAndUpdate({ name: 'os' }, {$push: {members: ['mahmoud']}}, function(err, group) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log("user added to group");
});

//leave user from group
Group.findOneAndUpdate({ name: 'os' }, {$pull: {members: 'mahmoud'}}, function(err, data){
   if (err) throw err;

  // we have the updated user returned to us
  console.log("user removed from group");
});
