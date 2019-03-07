'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const path =require('path');
app.use(express.json());

app.use('/assets', express.static('assets'))

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

app.get('/books', (req, res) => {
  let SQL = 'SELECT book_name FROM book_mast;'
  conn.query(SQL, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
  });
});

app.get('/', (req, res) => {
  
  res.sendFile(path.join(__dirname, './bookstore.html'))
})



app.listen(PORT, () => {
  console.log('Server is running')
})