const express = require('express');
const productController = require('../contoller/productController');
const productRouter = express.Router();


productRouter
.route('/products')
.get( productController.findAll)
.post( productController.createProduct);


productRouter
.route('/products/:id')
.get( productController.findById)
.put( productController.updateProduct)
.delete(productController.deleteProduct);

module.exports = productRouter;