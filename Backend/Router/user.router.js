// require express
const express = require("express");
// Router
const router = express.Router();
// Require Controller
const createUser = require("../controller/User.Controller");
// Init Method Request
router.post("/regester", createUser);
// Export
module.exports = router;