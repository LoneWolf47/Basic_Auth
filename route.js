//Required Modules

const express = require('express');
const router =express.Router();
const model =require("./schema.js");
const auth=require("basic-auth");

router.post('/create',function(req,res) { 
 
	let temp = new model ( {
		id:req.body.id,
		name:req.body.name,
		pass:req.body.pass,
			} );
	
	temp.save(function(err,temp) {
		if(err) throw err;
	 res.send("Successfully Created");
	} );
} );

router.post('/login',function(req,res) {
	
	var cred = auth(req);
	if(cred)
	{
		let temp=model.find( {"name":cred.name,"pass":cred.pass},function(err,temp) {
			if(Object.keys(temp).length)
				console.log("Access Granted");
			else console.log("Access Denied")
		} );
	}
	else console.log("Improper Credentials");
	
	
} );


module.exports=router;