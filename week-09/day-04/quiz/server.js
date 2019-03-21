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

app.get('/api/game', (req, res) => {
  
    let SQL = `SELECT id FROM questions;`;

    conn.query(SQL, (err, rows) => {
      if(err){
        console.error(err);
        res.status(500).send();
        return
      }
      let allQuestionId = rows.map(elem => {
        return elem.id
      })
      console.log(allQuestionId[randomNumber]);
      res.send(allQuestionId);
      // getQuestion(neededId, res);
  })
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
    let questionId = rows.insertId;

    let SQLanswers1 = [answers[0].answer_1, answers[0].is_correct];
    let SQLanswers2 = [answers[1].answer_2, answers[1].is_correct];
    let SQLanswers3 = [answers[2].answer_3, answers[2].is_correct];
    let SQLanswers4 = [answers[3].answer_4, answers[3].is_correct];
    
    insertAnswers(questionId, SQLanswers1, res);
    insertAnswers(questionId, SQLanswers2, res);
    insertAnswers(questionId, SQLanswers3, res);
    insertAnswers(questionId, SQLanswers4, res);

    getQuestion(questionId, res);
  })
})

function insertAnswers(inputQuestionId, SQLvalues, res){
  let SQL = `INSERT INTO answers (question_id, answer, is_correct) VALUES (${inputQuestionId}, ?);`
  conn.query(SQL, [SQLvalues], (err, rows) => {
    if(err){
      console.error(err);
      res.status(500).send();
      return
    }
    console.log(rows);
  })
}

function getQuestion(searchedID, res){
  let SQL = `SELECT * FROM questions WHERE id = ${searchedID};`;

  conn.query(SQL, (err, question) => {
    if(err){
      console.error(err);
      res.status(500).send();
      return
    }
    let choosenQuestion = question[0];
  
    SQL = `SELECT * FROM answers WHERE question_id = ${question[0].id};`

    conn.query(SQL, (err, options) => {
      if(err){
        console.error(err);
        res.status(500).send();
        return
      }
      res.send({
        id: choosenQuestion.id,
        question: choosenQuestion.question,
        answers: options
      })
    })
  })
}

function randomElemFromArray(inputArray){
  return inputArray[Math.floor(Math.random() * inputArray.length + 1)];
}