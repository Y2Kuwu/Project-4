const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const EmployeeCtrl = require('../../controllers/api/employee');

router.post('/', EmployeeCtrl.createEmployee, ensureLoggedIn);
router.get('/:id', EmployeeCtrl.getEmployeeByAtt, ensureLoggedIn);
router.get('/', EmployeeCtrl.employeeCompList, ensureLoggedIn);
router.delete('/:id', EmployeeCtrl.deleteEmployee, ensureLoggedIn);
router.put('/:id', EmployeeCtrl.updateEmployee, ensureLoggedIn);


module.exports = router