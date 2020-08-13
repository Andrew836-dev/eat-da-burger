const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        console.log(data);
        res.send("That's a get request");
    });
});

router.post("/api/burgers", function(req, res) {
    let newBurger = req.body.burger;
    burger.insert(newBurger, function(data) {
        console.log(data);
        res.send("That's a post request");
    });
});

router.put("/api/burgers", function(req, res) {
    let updatedBurger = req.body.burger;
    let id = req.body.id;
    burger.update(updatedBurger, id, function(data) {
        console.log(data);
        res.send("That's a put request");
    });
});
module.exports = router;