require("dotenv").config();
const express = require('express');
const dbconnection = require('./database/dbconnection');
const  route  = require("./router");
const app = express();
app.use(express.json());


dbconnection()
app.use(route)

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port 3000');
});