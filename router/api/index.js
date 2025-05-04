const express = require('express');
const route = express.Router()
const authroute = require('./authencation');
const categoryRoute = require('./category')
const subcategoryRoute = require('./Subcategory')
route.use("/authencation" , authroute)
route.use("/category" , categoryRoute)
route.use("/subcategory" , subcategoryRoute)
module.exports = route