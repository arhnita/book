var studentModel = require("student-model.js");

exports.interceptIDs = (req, res, next, id) => {
	studentModel.findById(id)
	.then((data) => {
		if(!data) {return next(new Error("not found"));}
		req.student = data;
		next();
	}, (err) => {return next (err);	
	})
}

exports.fetchAllStudents = (req, res, next) => {
	studentModel.find((err, data) => {
		if (err) {return next(new Error("We cannot find the student in our records"));}
		res.status(200).json(data)
	})
	};

exports.addStudent = (req, res, next) => {
	var student = req.body;
	var pupil = new studentModel(student);
	 pupil.save((err, data) => {
	 	if(err) {return next(new Error("Failed to add new user"))}

	 		res.status(200).json(data);
	 })
}

exports.fetchStudentsById = (req, res, next) => {
	if(!req.student) { return next(new Error("student not found in database"));}

	res.status(200) .json(req.student);
}

exports.deleteStudentById = (req, res) => {
	var id = req.params.id;

	studentModel.findIdAndRemove(id). then((data) => {
		if(!data) {return next(new Error("Could not delete Student data"));}

		res.status(200) .json(data);
	}, (err) => {
		next(err);
	});
	}

exports.updateStudent = (req,res) => {
	var id = req.params.id;
	var student = req.body;

studentModel.findIdAndUpdate (id, student).then((data) =>{
	if(!data) {return next(new Error("could not update Student record"));}

	res.status(200).json(data)
}, (err) => {
	next(err);
})
}	

