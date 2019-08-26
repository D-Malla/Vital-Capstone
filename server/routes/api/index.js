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

router.get("/lessons_title/:id", (req, res, next) => {
  const id = req.params.id;
  const sql = `SELECT * FROM lessons_title WHERE parent_id = ?
  `;

  conn.query(sql, [id], (err, results, fields) => {
    res.json(results);
  });
});

router.get("/lesson_content/:slug", (req, res, next) => {
  const slug = req.params.slug;
  const sql = `SELECT p.lesson_question, p.content, p.id, c.parent_id as parent_id
  FROM lessons_content p 
  LEFT JOIN lessons_title c ON p.cat_slug = c.slug
  WHERE c.slug = ? 
 `;

  conn.query(sql, [slug], (err, results, fields) => {
    console.log(results);
    res.json(results);
  });
});

module.exports = router;
