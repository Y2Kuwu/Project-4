const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/controllers/users');  //../../controllers/api/users

router.post('/', usersCtrl.create)  //
router.post('')

module.exports = router;
