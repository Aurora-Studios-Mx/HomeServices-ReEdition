//Call Express package
const express = require('express');

//Invoke router method
const router = express.Router();

//Call controller to router
const controller = require('../controllers/2fa.controller')

//Routes
router.post('/api/v2/post/2fa/setup', controller.tfaSetupHandle)

//Export
module.exports = router;