'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const path = require('path');

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
  res.sendFile(path.join(__dirname, './index.html'));
})

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/menageQuestions.html'));
})

app.post('/api/questions', (req, res) => {
  let question = req.body.question;
  let answers = req.body.answers;
})