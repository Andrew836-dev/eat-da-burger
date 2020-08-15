const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function (req, res) {
    // res.render("index", funct)
    res.send("This should be a html page");
});

router.get("/api/burgers", function (req, res) {
    try {
        burger.all(function (data) {
            console.log(data);
            res.send(data);
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).end();
    }
});

router.post("/api/burgers", function (req, res) {
    let newBurger = req.body.burger;
    try {
        burger.insert(newBurger, function (data) {
            console.log(data);
            res.send("That's a post request");
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).end();
    }
});

router.put("/api/burgers", function (req, res) {
    let updatedBurger = req.body.burger;
    let id = req.body.id;
    try {
        burger.update(updatedBurger, id, function (data) {
            // console.log(data);
            if (data.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).end();
    }
});

router.delete("/api/burgers", function (req, res) {
    let id = req.body.id;
    try {
        burger.delete(id, function (data) {
            // console.log(data);
            if (data.affectedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).end();
    }
});

module.exports = router;