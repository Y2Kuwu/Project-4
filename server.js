const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Always require and configure near the top 
require('dotenv').config();
// Connect to the database
require('./config/database');

// Local variables will come in handy for holding retrieved documents
let user, company, employee, record;
let users, companies, employees, records;

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder

app.use(express.static(path.join(__dirname, 'build')));

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));

// http://localhost:3001/api/users
app.use('/api/users', require('./routes/api/users'));
app.use('/api/company', require('./routes/api/company'));

// app.use('/api/record', require('./routes/api/record'));

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3000;


app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});