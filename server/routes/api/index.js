const router = require("express").Router();
const conn = require("../../db");

router.get("/greeting", (req, res, next) => {
  res.json({
    greeting: "Hello World!"
  });
});

module.exports = router;
