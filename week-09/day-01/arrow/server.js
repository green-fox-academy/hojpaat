'use strict';

const backend = require('./backend');
const PORT = 3000;

backend.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
})