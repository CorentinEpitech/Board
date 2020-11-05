const express = require('express')
const router = express.Router()
const adController = require('../controller/advertisements.controller.js');
router.get('/', adController.findAll);
module.exports = router