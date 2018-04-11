var userModel = require("./user-model.js");

exports.registerUser = (req, res, next) => {
	var use = req.body;

	var userobj = new userModel(user);

	userobj.save().then(function(data) {
		if(!data) {return next(new Error("User did not fill any data"));}
	}) 
}