const router = require("express").Router();
const conn = require("../../db");
const sha512 = require('js-sha512')
const jwt = require('jsonwebtoken')
const config = require('config')

router.post('/login', (req, res, next) => {
  const username = req.body.username
  const password = sha512(req.body.password + config.get('salt'))
  console.log(username, password)

  const sql = `SELECT * FROM users WHERE username = ? AND password = ?`

  conn.query(sql, [username, password], (err, results, fields) => {
    
    if (results.length > 0) {
      const token = jwt.sign({username}, config.get('secret'))
      
      res.json({
        message: 'Signed in',
        token: token
      })
    } else {
      res.status(401).res.json({
        message: 'username or password are incorrect'
      })
    }
    console.log(results)
  })
})

router.post('/register', (req, res, next) => {
  const username = req.body.username
  const password = sha512(req.body.password + config.get('salt'))
  const first_name = req.body.first_name
  const last_name = req.body.last_name

  const sql = `INSERT INTO users(username, password, first_name, last_name) VALUES (?, ?, ?, ?)`

  conn.query(sql, [username, password,first_name, last_name], (err, results, fields) => {
    if (err) {
      res.json ({
        message: 'username already exists',
        user: results
      })
    } else {
      res.json ({
        message: 'username created'
      })
    }
  })
})

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
  const sql = `SELECT * FROM lessons_title WHERE id = ?
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
