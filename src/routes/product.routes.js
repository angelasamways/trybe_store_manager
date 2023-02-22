const express = require('express');
const { validateName } = require('../middlewares/validateProduct');

const productController = require('../controllers/product.controller');

const productRouter = express.Router();

productRouter.get('/', productController.getProducts);

productRouter.get('/:id', productController.getProductsById);

productRouter.post('/', validateName, productController.insertProduct);

productRouter.put('/:id', validateName, productController.updateProduct);

productRouter.delete('/:id', productController.deleteProduct);

module.exports = productRouter;