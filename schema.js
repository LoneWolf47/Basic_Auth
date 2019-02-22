//Schema of our object(User):

const mongoose = require("mongoose");
const schema = mongoose.Schema;

let model=new schema({
	id:{type:Number, required:true},
	name:{type:String, required:true},
	pass:{type:String, required:true}
});


module.exports = mongoose.model("user",model);
