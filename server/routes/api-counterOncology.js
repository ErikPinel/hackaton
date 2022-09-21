const express = require("express");
const counteroncology = require("../models/counterOncology");
const router = express.Router();

router.get("/counterOncology", (req, res, next) => {
  Counter.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/counterOncology", (req, res, next) => {
  req.body
    ? Counter.create(req.body)
        .then((data) => res.json(data))
        .catch(next)
    : res.json({ error: "invalid input" });
});
router.delete("/counterOncology/:id", (req, res, next) => {
  Counter.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.patch("/counterOncology/?:id", (req, res, next) => {
  Counter.put({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
