const router = require("express").Router();
const conn = require("../../db");

router.get("/css_question", (req, res, next) => {
  const sql = `SELECT * FROM css_question`;

  conn.query(sql, (err, results, fields) => {
    res.json(results);
  });
});

module.exports = router;
