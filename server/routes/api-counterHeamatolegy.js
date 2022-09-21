const express = require("express");
const counterHeamatology = require("../models/counterHeamatolegy");
const router = express.Router();

router.get("/counterheamatology", (req, res, next) => {
  Counter.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/counterheamatology", (req, res, next) => {
  req.body
    ? Counter.create(req.body)
        .then((data) => res.json(data))
        .catch(next)
    : res.json({ error: "invalid input" });
});
router.delete("/counterheamatology/:id", (req, res, next) => {
  Counter.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.patch("/counterheamatology/?:id", (req, res, next) => {
  Counter.put({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
