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
  // const { type, message } = await productService.insertProduct(name);
  const productCreated = await productService.insertProduct(name);

  // if (type) return res.status(type).json({ message });

  res.status(201).json(productCreated);
};

module.exports = {
  getProducts,
  getProductsById,
  insertProduct,
};