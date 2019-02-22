//Required Modules

const express =require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const rout =require("./route.js");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//MongoDB Connection 
//pacto is my db name

const dburl="mongodb://localhost:27017/pacto";
mongoose.connect(dburl,{useNewUrlParser: true});
mongoose.connection.on('error', function (err){console.log("Mongoose Connection Error");console.log(err);});

app.use('/',rout);


//Server 
let port=8000;
app.listen(port, () => {
    console.log("Server is listening on port 8000");
});