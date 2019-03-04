'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use('/assets', express.static('assets'))

app.get('/', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log('Server started');
  
})
