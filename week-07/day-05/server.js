'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');

app.use(express.json());

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/posts', (req, res) => {
  conn.query('SELECT * FROM posts;', (err, rows) => {
    if(err){
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
  })
})

app.post('/posts', (req, res) => {
  let SQL = `INSERT INTO posts (title, url, user_id) VALUES ('${req.body.title}', '${req.body.url}', ${req.body.user_id});`;
  conn.query(SQL, (err, rows) => {
    if(err){
      console.error(err);
      res.status(500).send();
      return;
    }
    SQL = `SELECT * FROM posts WHERE post_id = ${rows.insertId};`;
    
    conn.query(SQL, (err, rows) => {
      if(err){
        console.error(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
  })
})
});



app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});