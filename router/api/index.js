const express = require('express');
const route = express.Router()
const authroute = require('./authencation');

route.use("/authencation" , authroute)

module.exports = route