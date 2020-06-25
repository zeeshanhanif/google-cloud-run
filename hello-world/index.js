const express = require('express');
const app = express();

// Add headers
app.use(function (req, res, next) {
  var origin = req.headers.origin;
  res.setHeader('Access-Control-Allow-Origin', origin || "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});



app.get('/', (req, res) => {
  console.log('Hello world received a request. updated');

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!`);
});

app.get('/user', (req, res) => {
  console.log('/user received a request.');

  res.json({name: "John", age: 60});
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});