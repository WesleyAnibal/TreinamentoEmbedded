
const express = require('express');

const userController = require('../constrollers/user.controller.js')();

var router = express.Router(); //organizando as minhas rotas.

router.get('/', userController.getUser)

router.post('/', userController.postUser)

router.delete('/', userController.deleteUser)

module.exports = router;