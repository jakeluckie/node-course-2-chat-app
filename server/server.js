require('./config/config');

const express = require('express');
const path = require('path'); // extension to create clean

const publicPath = path.join(__dirname, '../public');

var app = express();
const port = process.env.PORT;

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Started up at ${port}`);
});

module.exports = {app};