require('./config/config');

const path = require('path'); // extension to create clean paths
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', (message, callback) => {
        console.log('newMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server');

    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
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