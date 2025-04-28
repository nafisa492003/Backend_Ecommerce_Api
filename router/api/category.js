const { Router } = require('express');
const { createProduct, getAllProducts, getSingalProduct } = require('../../controllers/productController');

const router = Router();



router.post('/createProduct', createProduct)
router.get('/allProduct', getAllProducts)
router.get('/getSingalProduct/:id', getSingalProduct)

module.exports = router