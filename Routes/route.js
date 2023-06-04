const express = require('express');
const productController = require('../contoller/productController');
const auth = require('../middleware/auth');
const productRouter = express.Router();

productRouter.use(auth);

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