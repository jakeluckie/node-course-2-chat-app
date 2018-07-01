require('./config/config');

const path = require('path'); // extension to create clean paths
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', {
        "from": "bobby",
        "text": "How may I help you?",
        "createdAt": 123412
    });

    socket.on('createMessage', (newMessage) => {
        console.log('newMessage', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// io.on('disconnection', (socket) => {
//     console.log('user disconnected');
// });

server.listen(port, () => {
    console.log(`Started up at ${port}`);
});

module.exports = {app};