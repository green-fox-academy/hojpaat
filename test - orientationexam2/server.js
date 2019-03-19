'use stict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const path = require('path')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/assets', express.static('assets'));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './assets/index.html'));
})

app.get('/a/:alias', (req, res) => {
  let searchedAlias = req.params.alias;

  let SQL = `SELECT * FROM test WHERE alias = '${searchedAlias}';`;

  conn.query(SQL, (err, rows) => {

    if (err) {
      console.error(err);
      return
    }
    if (rows.length === 0) {
      res.status(400).send();
      return
    }

    let url = `http://${rows[0].url}`;

    incrementHit(searchedAlias);

    res.redirect(url);
  })
})

app.get('/api/links', (req, res) => {
  let SQL = 'SELECT id, url, alias, hitCount FROM test;';

  conn.query(SQL, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return
    }
    res.json(rows);
  })
})

app.delete('/api/links/:id', (req, res) => {
  let searchedId = parseInt(req.params.id);
  let inputSecretCode = parseInt(req.body.secretCode);

  let SQL = `SELECT * FROM test WHERE id = ${searchedId};`;

  conn.query(SQL, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return
    }
    if (rows.length === 0) {
      res.status(404).send();
      return
    }
    if (rows[0].secretCode !== inputSecretCode) {
      res.status(403).send();
      return
    }
    if (rows[0].secretCode == inputSecretCode) {
      SQL = `DELETE FROM test WHERE id = ${searchedId};`;

      conn.query(SQL, (err, rows) => {
        if (err) {
          console.error(err);
          return
        }
        res.status(204).send();
      })
    }
  })
})

app.post('/api/links', (req, res) => {
  const {url, alias} = req.body;

  let SQL = `SELECT * FROM test WHERE alias = '${alias}';`;

  conn.query(SQL, (err, rows) => {
    if(err){
      console.error(err);
      res.status(500).send();
      return
    }

    if(rows.length > 0){
      res.status(400).send();
      return
    }

    SQL = `INSERT INTO test (url, alias, secretCode) VALUES ('${url}', '${alias}', ${generateSecretCode()});`;

    conn.query(SQL, (err, rows) => {
      if(err){
        console.error(err);
        return
      }

      SQL = `SELECT * FROM test WHERE id = ${rows.insertId};`;

      conn.query(SQL, (err, rows) => {
        if(err) {
          console.error(err);
          res.status(500).send();
          return
        }
        res.send(rows);
      })
    })


  })


 
})

function incrementHit(inputAlias) {
  let SQL = `UPDATE test SET hitCount = hitCount + 1 WHERE alias = '${inputAlias}';`
  conn.query(SQL, (err, rows) => {
    if (err) {
      console.error(err);
      return
    }
    res.send();
  })
}

function generateSecretCode(){
  return Math.round(Math.random() * 9998 + 1 );
}
