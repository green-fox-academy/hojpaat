'use strict';

require('dotenv').config(); //be able to use dotenv
const express = require('express'); // use express package
const app = express(); //
const PORT = 3000; //set up the port
const mysql = require('mysql'); //use mysql package
const path = require('path') //be able to use path package provides utilities for working with file and directory paths

app.use(express.urlencoded({ extended: true }));// be able to send data by form

app.use(express.json()); // parse to json

app.use('/assets', express.static('assets')); //for the static file

//error handling
const errorFunction = (res, err) => {
  if(err){
    console.error(err);
    res.status(500).send();
    return;
  }
}

//create connection between js and mysql
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

//connect the html to the localhost
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
})

//do some magic with SQL
app.get('/books', (req, res) => {
  let SQL = 'SQL syntax;';
  conn.query(SQL, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
  });
});

//store into the database
app.post('/api/links', (req, res) => {
  let SQL = `INSERT INTO tableName (column1, column2) VALUES ('${req.body.column1}', ${req.body.column2});`;

  conn.query(SQL, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    SQL = `SELECT * FROM tasks WHERE id = ${rows.insertId};`;

    conn.query(SQL, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      };
      res.send(rows);
    })
  })
});

//query selector
app.get('/endpoint', (req, res) => {
  let filter = req.query.filter;
})

//params
app.get('/:paramName', (req, res) => {
  let parameter = req.params.paramName;
})

//create the server connection
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})