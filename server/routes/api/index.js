const router = require("express").Router();
const conn = require("../../db");

router.get("/lessons_title/", (req, res, next) => {
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

router.get("/lessons_title/:id", (req, res, next) => {
  const id = req.params.id;
  const sql = `SELECT * FROM lessons_title WHERE parent_id = ?
  `;

  conn.query(sql, [id], (err, results, fields) => {
    res.json(results);
  });
});

router.get("/ind_lesson/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(req.params);
  const sql = `SELECT * 
  FROM lessons_title
   WHERE l.id = ?
  `;

  conn.query(sql, [id], (err, results, fields) => {
    res.json(results);
  });
});

router.get("/questions/:parent_id", (req, res, next) => {
  const parent_id = req.params.parent_id;
  const sql = `SELECT * FROM questions WHERE parent_id = ? `;

  conn.query(sql, [parent_id], (err, results, fields) => {
    console.log("Label", results);
    res.json(results);
  });
});

router.get("/answers/:parent_id", (req, res, next) => {
  const parent_id = req.params.parent_id;
  const sql = `SELECT * FROM answers WHERE parent_id = ?`;
  conn.query(sql, [parent_id], (err, results, fields) => {
    console.log("Labe2l", results);
    res.json(results);
  });
});

module.exports = router;
