const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  const obj = {
    name: 'rama',
    test: 'test'
  }
  res.send(obj);
});

app.use(cors());

app.use('/images', express.static('images'));

console.log("test");
app.listen(5000);