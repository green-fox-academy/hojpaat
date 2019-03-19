'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const path = require('path')

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'exam1'
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/assets', express.static('assets'));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})

app.get('/api/links', (req, res) => {
  res.set('Content-type', 'application/json');
  const { url, alias } = req.body;
  getURLByAlias(alias, (urlData) => {res.json(urlData);});
  /*inside getURLByAlias the conn.query is an async, so return won't work, cause the array from the sql will be in delay compared to the return -> gives back unefined, but the call-back funtion able to send the return back as response this way*/
});


function getURLByAlias(inputAlias, callback) {
conn.query(`SELECT * FROM test WHERE alias = ${inputAlias};`, (err, rows) => {
    if (err) {
      console.error(err);
      callback([]);
    }  
    callback(rows);
  });
}

function getShortUrlByAlias(alias) {
  conn.query(
    'SELECT * FROM test WHERE alias = ?',
    [alias || ''],
    (err, rows) => {
      if (err) {
        console.error(err);
        return [];
      }
      
      return rows || [];
    },
  );
}



function creatUrlAlias(alias, url) {
  let SQL = 'INSERT INTO test (alias, url, secretCode) VALUES (?, ?, ?);'

  conn.query(SQL, [alias, url, createSecretCode()], (err, rows) => {
    if (err) {
      console.error(err);
      return false;
    }
    return true;
  });
}
      function createSecretCode() {
        return Math.floor(Math.random() * 9998 + 1);
      }