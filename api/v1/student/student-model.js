var moongoose = require("mongoose");
var StudentSchema;

// mongoose.connect("mongodb://localhost/student");
mongoose.connect("mongodb://<Anita>:12345@ds135399.mlab.com:35399/student")

StudentSchema = new mongoose.Schema({
	name: {type: String, required: true},
	role: {type: String, required: true},
	date: {type: Date, default: Date.now}
});
module.exports = mongoose.model("pupil", StudentSchema);