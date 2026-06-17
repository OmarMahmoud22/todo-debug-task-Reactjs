const express = require("express");
// Router
const router = express.Router();
// Require Controller
const {Login , createAdmin} = require("../controller/AdminController");
// Init Method Request
router.post("/login", Login);
router.post("/create_admin",createAdmin)
// Export
module.exports = router;