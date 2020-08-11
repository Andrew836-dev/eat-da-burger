const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {
    res.send("That's a get request");
});

module.exports = router;