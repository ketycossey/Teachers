const express = require("express");
const router = express.Router();

//Get api/posts
//for Public for jwt (no token needed)
router.get("/", (req, res) => res.send("Posts Route"));

module.exports = router;
