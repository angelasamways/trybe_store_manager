const productService = require('../services/product.service');

const getProducts = async (_req, res) => {
  const { type, message } = await productService.getProducts();

  if (type) {
    return res.status(404).send({
      message: 'Product not found',
    });
  }
  return res.status(200).json(message);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getProductsById(id);

  if (type) {
    return res.status(404).json({
      message: 'Product not found',
    });
  }
  return res.status(200).json(message);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const productCreated = await productService.insertProduct(name);

  res.status(201).json(productCreated);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type } = await productService.getProductsById(id);
  const productUpdated = await productService.updateProduct(id, name);
  if (type) {
    return res.status(404).json({
      message: 'Product not found',
    });
  }
  return res.status(200).json(productUpdated);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type } = await productService.deleteProduct(id);
  if (type) {
    return res.status(404).json({
      message: 'Product not found',
    });
  }
  return res.status(204).json();
};

module.exports = {
  getProducts,
  getProductsById,
  insertProduct,
  updateProduct,
  deleteProduct,
};