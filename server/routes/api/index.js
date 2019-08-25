const router = require("express").Router();
const conn = require("../../db");

router.get("/lessons_title", (req, res, next) => {
  const sql = `SELECT * FROM lessons_title`;
  let data = {
    title: "home"
  };
  conn.query(sql, (err, results, fields) => {
    data.lessons_title = results.filter(result => result.parent_id === null);
    data.lessons_title.map(cat => {
      let subcat = results.filter(result => {
        if (result.parent_id === cat.id) {
          return result;
        }
      });
      cat.subcat = subcat;
    });
    res.json(data);
  });
});

module.exports = router;
