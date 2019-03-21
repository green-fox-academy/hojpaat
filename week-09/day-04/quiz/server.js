'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
  let SQLquestion = `INSERT INTO questions (question) VALUES ('${question}');`;

  conn.query(SQLquestion, (err, rows) => {
    if(err){
      console.error(err);
      res.status(500).send();
      return
    }
    let questionId = res.insertId;

    let SQLanswers = `INSERT INTO answers (question_id), answer, is_correct) VALUES (${questionId}, ${answers[0].answer_1}, ${answers[0].is_correct}); INSERT INTO answers (question_id), answer, is_correct) VALUES (${questionId}, ${answers[1].answer_2}, ${answers[1].is_correct}); INSERT INTO answers (question_id), answer, is_correct) VALUES (${questionId}, ${answers[2].answer_3}, ${answers[2].is_correct}); INSERT INTO answers (question_id), answer, is_correct) VALUES (${questionId}, ${answers[3].answer_4}, ${answers[3].is_correct});`;

    // conn.query(SQLanswers, (err, rows) => {
    //   if(err){
    //     console.error(err);
    //     res.status(500).send();
    //     return
    //   }
      res.send(rows);
    })
  // })
  // res.send('happaned');
})