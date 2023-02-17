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
  const result = await productModel.insertProduct(name); 

  return result;
};

module.exports = {
  getProducts,
  getProductsById,
  insertProduct,
};