const express =  require('express');
const Product = require('../models/product.models.js');
const {getProducts, getProduct, postProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');
const router = express.Router();

router.get('/',getProducts);
router.get('/:id',getProduct);

router.post('/', postProduct);

router.put('/:id',updateProduct);

router.delete('/:id',deleteProduct);

module.exports = router;