const express = require("express");
const counterOncology = require("../models/counterOncology");
const router = express.Router();

router.get("/counteroncology", (req, res, next) => {
  counterOncology.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/counteroncology", (req, res, next) => {
  req.body
    ? counterOncology.create(req.body)
        .then((data) => res.json(data))
        .catch(next)
    : res.json({ error: "invalid input" });
});
router.delete("/counteroncology/:id", (req, res, next) => {
  counterOncology.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.patch("/counteroncology/?:id", (req, res, next) => {
  Counter.put({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
