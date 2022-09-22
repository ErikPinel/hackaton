const express = require("express");
const Logged = require("../models/logged");
const router = express.Router();

router.get("/logged", (req, res, next) => {
  Logged.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/logged", (req, res, next) => {
  req.body
    ? Logged.create(req.body)
        .then((data) => res.json(data))
        .catch(next)
    : res.json({ error: "invalid input" });
});

router.delete("/logged/?:id", (req, res, next) => {
  Logged.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});



module.exports = router;
