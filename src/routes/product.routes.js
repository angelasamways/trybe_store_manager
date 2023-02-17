const express = require('express');

const productController = require('../controllers/product.controller');

const productRouter = express.Router();

productRouter.get('/', productController.getProducts);
productRouter.post('/', productController.insertProduct);
productRouter.get('/:id', productController.getProductsById);

module.exports = productRouter;