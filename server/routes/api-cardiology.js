const express = require("express");
const Cardiology = require("../models/cardiology");
const router = express.Router();

router.get("/cardiology", (req, res, next) => {
  Cardiology.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/cardiology", (req, res, next) => {
  req.body
    ? Cardiology.create(req.body)
        .then((data) => res.json(data))
        .catch(next)
    : res.json({ error: "invalid input" });
});
router.delete("/cardiology/:id", (req, res, next) => {
  Cardiology.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.patch("/cardiology/?:id", (req, res, next) => {
  Oncology.put({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
