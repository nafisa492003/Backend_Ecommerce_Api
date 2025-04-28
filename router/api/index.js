const express = require('express');
const route = express.Router()
const authroute = require('./authencation');
const categoryRoute = require('./category')
route.use("/authencation" , authroute)
route.use("/category" , categoryRoute)
module.exports = route