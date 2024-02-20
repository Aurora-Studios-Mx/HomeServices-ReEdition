//Call Express package
const express = require('express');

//Invoke router method
const router = express.Router();

//Call controller to router
const controller = require('../controllers/developers.controller')

//Routes
router.get('/developers/api/get/createSessionToken', controller.createSessionToken)
router.post('/developers/api/post/middleware', controller.getAvailableToken)
// router.get('/api/v1/get/status', controller.server)

//Export
module.exports = router;