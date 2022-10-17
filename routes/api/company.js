const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const CompanyCtrl = require('../../controllers/api/company');


router.get('/', CompanyCtrl.getCompany, ensureLoggedIn);
// router.get('/getEmployee', CompanyCtrl.getEmployee);
router.post('/', CompanyCtrl.createCompany, ensureLoggedIn);
// router.post('/createEmployee', CompanyCtrl.createEmployee);
router.delete('/:id', CompanyCtrl.deleteCompany, ensureLoggedIn);
router.post('/', CompanyCtrl.createEmployee, ensureLoggedIn);
router.get('/:id', CompanyCtrl.getOneCompany, ensureLoggedIn);
router.put('/:id', CompanyCtrl.updateCompany, ensureLoggedIn);

module.exports = router;