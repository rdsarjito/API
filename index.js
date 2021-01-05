const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  const obj = {
    name: 'rama'
  }
  res.send(obj);
});

console.log("test")
app.listen(5000);