const express = require('express');
const router = express.Router();
const usersCtrl = require('../../../controllers/controllers/api/users');


const ensureLoggedIn = require('/check-token', ensureLoggedIn, userCtrl.checkToken)

// POST : http://localhost:3001/api/users
router.post('/', usersCtrl.create);

// POST : http://localhost:3001/api/users/login
router.post('/login', usersCtrl.login);
router.get('/check-token', usersCtrl.checkToken)


module.exports = router;