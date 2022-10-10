const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// const usersCtrl = require('../../../controllers/controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');                       

//const ensureLoggedIn = require('/check-token', ensureLoggedIn, usersCtrl.checkToken)  //changed to users
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)
// POST : http://localhost:3001/api/users
router.post('/', usersCtrl.create);

// POST : http://localhost:3001/api/users/login
router.post('/login', usersCtrl.login);
router.get('/check-token', usersCtrl.checkToken)


module.exports = router;