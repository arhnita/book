// this imports the http module from express
var http= require ("http");
var express = require("express");
var app= express();
var bps = require("body-parser");
var router = express.Router();

app.use(bps.json());
app.use(bps.urlencoded({extended: true}));

//serve static files
app.use(express.static(__dirname + "/www"));


app.get("/home", function(req, res) {
	res.sendFile(__dirname + "/www/home.html");
})


//listen for incoming requests 
app.listen(3000, () => {
    console.log("server started...");
});