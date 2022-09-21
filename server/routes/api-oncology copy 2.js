const express = require("express");
const Haematology = require("../models/haematology");
const router = express.Router();

router.get("/haematology", (req, res, next) => {
  Haematology.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/haematology", (req, res, next) => {
  req.body
    ? Haematology.create(req.body)
        .then((data) => res.json(data))
        .catch(next)
    : res.json({ error: "invalid input" });
});

router.delete("/haematology/?:id", (req, res, next) => {
  Haematology.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.patch("/haematology/?:id", (req, res, next) => {
  Haematology.put({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
