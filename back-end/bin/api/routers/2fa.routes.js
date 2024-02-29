//Call Express package
const express = require('express');

//Invoke router method
const router = express.Router();

//Call controller to router
const controller = require('../controllers/2fa.controller')

//Routes
router.post('/api/v2/post/2fa/setup', controller.tfaSetupHandle)
router.post('/api/v2/post/2fa/verify', controller.tfaVerificationHandle)
router.post('/api/v2/post/2fa/verify/login', controller.tfaVerificationHandle2)
router.post('/api/v2/post/2fa/active', controller.tfaActive)
router.post('/api/v2/post/2fa/disable', controller.tfaDisable)

//Export
module.exports = router;