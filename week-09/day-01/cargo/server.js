'use strict';

const cargo = require('./cargo');
const PORT = process.env.PORT || 3000;

cargo.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
})