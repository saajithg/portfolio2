const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Use the router
app.use('/', indexRouter);

module.exports = app;
