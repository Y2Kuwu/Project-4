const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const EmployeeCtrl = require('../../controllers/api/employee');

router.post('/', EmployeeCtrl.createEmployee, ensureLoggedIn);


module.exports = router