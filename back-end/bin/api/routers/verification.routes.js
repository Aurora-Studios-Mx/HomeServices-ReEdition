//Call Express package
const express = require('express');
const { checkToken } = require('../../utility/middlewares');

//Invoke router method
const router = express.Router();

//Call controller to router
const controller = require('../controllers/verification.controller');

//Routes
router.post('/api/v1/post/security/verification/mail', controller.newCode)
router.post('/api/v1/post/security/verification/mail/evaluate', controller.evaluateEmail)
router.post('/api/v1/post/security/verification/complete', controller.insertCode)
router.post('/api/v2/post/security/verification/fiscals', controller.verificationInformation)

//Export
module.exports = router;