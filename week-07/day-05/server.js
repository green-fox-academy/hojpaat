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

conn.connect((err) => {
if (err) {
  console.log('Error connecting to DB');
  console.error();
  return;
}
console.log('DB is connected');
});
conn.end();

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});