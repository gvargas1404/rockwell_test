const getTask = require('./routes/task');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/content', getTask);

module.exports = app;