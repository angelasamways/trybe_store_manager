const salesService = require('../services/sales.service');

const getSales = async (_req, res) => {
  const { type, message } = await salesService.getSales();

  if (type) {
    return res.status(404).send({
      message: 'Sale not found',
    });
  }
  return res.status(200).json(message);
};

const getSalesById = async (req, res) => {
      console.log('Controler');

  const { id } = req.params;
  const { type, message } = await salesService.getSalesById(id);
        // console.log('Controler');

  if (!type) {
    return res.status(404).json({
      message: 'Sale not found',
    });
  }
  return res.status(200).json(message);
};

// const insertSales = async (req, res) => {
//   const { name } = req.body;
//   const salesCreated = await salesService.insertSales(name);

//   res.status(201).json(salesCreated);
// };

module.exports = {
  getSales,
  getSalesById,
  // insertSales,
};