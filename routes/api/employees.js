const express = require('express');
const router = express.Router();
const EmployeesCtrl = require('../../controllers/api/employees');


router.post('/', EmployeesCtrl.createEmployee);
router.get('/', EmployeesCtrl.userExists);
router.get('/', EmployeesCtrl.userIsSuper);
router.get('/findEmployee', EmployeesCtrl.findEmployee);


module.exports = router;