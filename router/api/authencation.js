const express = require('express');
const registretionController = require('../../controllers/registretionController');
const {otpController, resendOtpController} = require('../../controllers/otpController');
const logController = require('../../controllers/logController');
const route = express.Router();


route.post('/registration', registretionController)
route.post ('/otpValidation', otpController)
route.post('/login', logController)
route.post('/resendOtp', resendOtpController)
module.exports = route