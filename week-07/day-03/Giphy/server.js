'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

// const myData = require('giphy').myData

app.use('/', express.static('.'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))

})


app.listen(PORT, () => {
  console.log('Server started');
  
})