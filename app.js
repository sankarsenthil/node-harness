const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3300, () => {
  console.log('Server listening on port 3300');
});
