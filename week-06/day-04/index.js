'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

let data = {
  title: 'MyWeb',
  main: 'This is the main site',
  second: 'This is the second site'
}

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Myweb',
    main: 'This is the main site'
  });
});

app.get('/second', (req, res) => {
  res.render('home',{
    title: 'MyWeb',
    main: 'This is the second site'
  });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port.`)
})