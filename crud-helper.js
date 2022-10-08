// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Company = require('./models/company');
const Employee = require('./models/employee');
const Record = require('./models/record');

// Local variables will come in handy for holding retrieved documents
let user, company, employee, record;
let users, companies, employees, records;
