const express = require('express');
const router = express.Router();
const EmployeesCtrl = require('../../controllers/api/employees');


router.post('/', EmployeesCtrl.create);


router.get('/check-token', EmployeesCtrl.checkToken)


module.exports = router;