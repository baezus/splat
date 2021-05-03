const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  
});

server.listen(2737, () => {
  console.log('listening on port:2737');
});