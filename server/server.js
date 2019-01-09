//SERVER SIDE JavaScript

const path = require('path'); //Built-in node module
const http = require('http'); //Built-in node module
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected.');

    socket.emit('newMessage', {
        from: "mike@example.com",
        text: "Hey. What's going on?",
        createdAt: 123
    });

    socket.on('createMessage', (message) => {
        console.log(`createMessage from ${message.from}`, message);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected.');
    });
});

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});