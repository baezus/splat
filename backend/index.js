//express setup
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

//socket.io setup
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  
});

io.on('connection', (socket) => {
  console.log('someone has connected!');
  socket.broadcast.emit('hi');
  socket.on('chat message', (msg) => {
    io.emit('message: ' + msg);
  });
  socket.on('disconnect', () => {
    console.log('someone disconnected!');
  });
});

server.listen(2737, () => {
  console.log('listening on port:2737');
});