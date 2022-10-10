const express = require('express');
const router = express.Router();
const CompanyCtrl = require('../../controllers/api/company');


router.get('/findCompany', CompanyCtrl.findCompany);
router.get('/createCompany', CompanyCtrl.createCompany);
router.get('/createEmployee', CompanyCtrl.createEmployee);



module.exports = router;