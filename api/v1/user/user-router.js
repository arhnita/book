var epress = require("express");
var router = express.Router();
var controller = require("./user-controller.js");

router.route('/')
 	.post(controller.registerUser);

 	module.exports = router;