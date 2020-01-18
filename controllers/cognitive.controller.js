const db = require("../models");
const router = require("express").Router();

// Read All
router.route("/").get(function (req, res) {
    res.send("hello");
    db.Cognitive
        .findAll({})
        .then((dbModel) => {
            console.log(dbModel)
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
})

// Create
router.route("/").post((req, res) => {
    console.log(req.body);
    db.Cognitive
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});