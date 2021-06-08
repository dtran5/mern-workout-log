const express = require("express");

const userControllers = require("../controllers/user-controller");

const router = express.Router();

// SIGN UP NEW ACCOUNT
router.post("/signup", userControllers.signup);

// LOGIN TO EXISTING ACCOUNT
router.post("/signin", userControllers.signin);

// LOGOUT
router.get("/logout", userControllers.logout);

// nodejs export syntax
// this means the thing which we export in this file is this router constant
module.exports = router;
