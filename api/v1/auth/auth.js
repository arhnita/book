var expressjwt = require("express-jwt");
var jwt        = require("jsonwebtoken");
var userModel  = require("user-model.js");
var checkToken = expressjwt({secret: "jsonweb"});

export.decodeToken = (req, res, next) => {
	checkToken(req, res, net);
	console.log(req.user);
}


exports.verifyUser = (req, res, next) => {
var username = req.body.username;
var password = req.body.password;

if(!username || !password){
	return next(new Error("Please enter username and/or password"));
}
userModel.findOne({username: username}). then( function(user) {
	if(!user) {
		return next(new Error("username and/or password incorrect"));
	}
	if(!user.authenticate(password)) {
		return next(new Error("username and/or password incorrect"));
	}
	req.user = user;
	next();
}, (err) => {
	next(err);
});
}