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
    if (err) {
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
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    SQL = `SELECT * FROM posts WHERE post_id = ${rows.insertId};`;

    conn.query(SQL, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
    })
  })
});


app.put('/posts/:id/upvote', (req, res) => {
  let postId = req.params.id;
  if (typeof postId !== 'undefined') {
    let SQL = `UPDATE posts SET score = score + 1 WHERE post_id=${postId}`;
    conn.query(SQL, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }

      SQL = `SELECT * FROM posts WHERE post_id = ${postId};`;
      conn.query(SQL, (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).send();
          return;
        }
        res.send(rows);
      })
    })
  } else {
    res.send('Incorrect id')
  }
})


app.put('/posts/:id/downvote', (req, res) => {
  let postId = req.params.id;
  if (typeof postId !== 'undefined') {
    let SQL = `UPDATE posts SET score = score - 1 WHERE post_id=${postId}`;
    conn.query(SQL, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }

      SQL = `SELECT * FROM posts WHERE post_id = ${postId};`;
      conn.query(SQL, (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).send();
          return;
        }
        res.send(rows);
      })
    })
  } else {
    res.send('Incorrect id')
  }
})

app.delete('/posts/:id/delete', (req, res) => {
  let postId = req.params.id;

  let SQL = `DELETE FROM posts WHERE post_id = ${postId};`;

  if (typeof postId !== 'undefined') {
    conn.query(SQL, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
    })
  } else {
    res.send('Incorrect id')
  }
})

app.put('/posts/:id', (req, res) => {
  let postId = req.params.id;
  let reqUsername = req.headers.username;
  let SQL = `SELECT user_name FROM posts p LEFT JOIN users u ON p.user_id = u.user_id WHERE post_id =${postId}`;
  conn.query(SQL, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    if (reqUsername === rows[0]['user_name']) {
      SQL = `UPDATE posts SET title = '${req.body.new_title}', url = '${req.body.new_url}' WHERE post_id=${postId}`;
      conn.query(SQL, (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).send();
          return;
        }
        SQL = `SELECT * FROM posts WHERE post_id = ${postId};`;
        conn.query(SQL, (err, rows) => {
          if (err) {
            console.error(err);
            res.status(500).send();
            return;
          }
          res.send(rows);
        })
      })
    } else {
      res.send('It is not your post');
    };
  })
  // 
})

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});