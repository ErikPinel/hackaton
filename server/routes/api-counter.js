const express = require("express");
const Counter = require("../models/counter");
const router = express.Router();

router.get("/counter", (req, res, next) => {
  Counter.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/counter", (req, res, next) => {
  req.body
    ? Counter.create(req.body)
        .then((data) => res.json(data))
        .catch(next)
    : res.json({ error: "invalid input" });
});
router.delete("/counter/:id", (req, res, next) => {
  Counter.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.patch("/counter/?:id", (req, res, next) => {
  Counter.put({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
