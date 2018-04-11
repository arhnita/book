var mongoose = require("mongoose");
var UserSchema;
// mongoose.connect("mongodb://localhost/student");

mongoose.connect("mongodb://<Anita>:12345@ds135399.mlab.com:35399/student")


UserSchema = new mongoose.Schema({
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true}
});


module.exports = mongoose.model("user", UserSchema);