var express = require("express");
var router  = express.Router();
var controller = require("student-controller.js");

router.param("id", controller.interceptIDs);

router.route("/")
.get(controller.fetchAllStudents)
.post(controller.addStudent);








module.exports = router;