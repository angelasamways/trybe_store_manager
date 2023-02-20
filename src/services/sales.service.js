const salesModel = require('../models/sales.model');

const getSales = async () => {
  const allSales = await salesModel.getAll();

  return { type: null, message: allSales };
};

const getSalesById = async (id) => {
  const sales = await salesModel.getById(id);
  if (sales.length === 0) return { type: 404, resultado: 'Sale not found' };
  return { type: 200, resultado: sales };
};

// const insertSales = async (name) => {
//   const salesCreated = await salesModel.insertSales(name);
//   return salesCreated;
// };

module.exports = {
  getSales,
  getSalesById,
  // insertSales,
};