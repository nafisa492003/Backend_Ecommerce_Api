const { Router } = require("express");
const { createProduct, getAllProduct, getSingalproduct, UpdateProduct, Deleteproduct } = require("../../controllers/productController");

const routes = new Router();

// Add routes
routes.get('/getallproduct', getAllProduct);
routes.get('/getsingleproduct', getSingalproduct);
routes.post("/createproduct", createProduct);
routes.put('/updateProduct/:id', UpdateProduct);
routes.delete('/deleteProduct/:id', Deleteproduct);

module.exports = routes;
