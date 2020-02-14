const express = require("express");
const router = express.Router();

//Get api/profile
//for Public for jwt (no token needed)
router.get("/", (req, res) => res.send("profile Route"));

module.exports = router;
