const express = require("express");
const counterHaematology = require("../models/counterHaematology");
const router = express.Router();

router.get("/counterhaematology", (req, res, next) => {
  counterHaematology.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/counterhaematology", (req, res, next) => {
  req.body
    ? counterHaematology.create(req.body)
        .then((data) => res.json(data))
        .catch(next)
    : res.json({ error: "invalid input" });
});
router.delete("/counterhaematology/:id", (req, res, next) => {
  counterHaematology.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.patch("/counterhaematology/?:id", (req, res, next) => {
  counterHaematology.put({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
