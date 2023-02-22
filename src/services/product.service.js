const productModel = require('../models/product.model');

const getProducts = async () => {
  const allProducts = await productModel.getAll();

  return { type: null, message: allProducts };
};

const getProductsById = async (id) => {
  const product = await productModel.getById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  return { type: null, message: product };
};

const insertProduct = async (name) => {
  const productCreated = await productModel.insertProduct(name);
  return productCreated;
};

const updateProduct = async (id, name) => {
  const hasProduct = await productModel.getById(id);
  if (!hasProduct) return { type: 404, message: 'Product not found' };

  await productModel.updateProduct(id, name);
  return { id, name };
};

module.exports = {
  getProducts,
  getProductsById,
  insertProduct,
  updateProduct,
};