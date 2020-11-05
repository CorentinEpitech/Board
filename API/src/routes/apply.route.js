const express = require('express')
const router = express.Router()
const adController = require('../controller/apply.controller.js');
router.post('/', adController.create);
module.exports = router