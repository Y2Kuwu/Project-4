const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const CompanyCtrl = require('../../controllers/api/company');


router.get('/', CompanyCtrl.getCompany);
// router.get('/getEmployee', CompanyCtrl.getEmployee);
router.post('/', CompanyCtrl.createCompany);
// router.post('/createEmployee', CompanyCtrl.createEmployee);
router.delete('/:id', CompanyCtrl.deleteCompany);
router.post('/', CompanyCtrl.createEmployee);
router.get('/:id', CompanyCtrl.detailCompany);

module.exports = router;