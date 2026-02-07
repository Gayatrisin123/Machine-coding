const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hii gaytri how r u');
});
const myserver = http.createServer(app);
myserver.listen(5000);
