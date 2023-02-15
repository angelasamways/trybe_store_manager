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
    return res.status(404).send({
      message: 'Product not found',
    });
  }
  return res.status(200).json(message);
};

// app.get('/talker/:id', async (req, res) => {
//   const talkerIds = await readTalker();
//   const talkerId = talkerIds.find(({ id }) => id === Number(req.params.id));
//   if (talkerId) {
//     return res.status(200).json(talkerId);
//   }
//     return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
// });

module.exports = {
  getProducts,
  getProductsById,
};