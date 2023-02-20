const salesModel = require('../models/sales.model');

const getSales = async () => {
  const allSales = await salesModel.getAll();

  return { type: null, message: allSales };
};

const getSalesById = async (id) => {
        console.log('Service');
  console.log(id);
  const sales = await salesModel.getById(id); 
  if (!sales) return { type: 404, message: 'Sale not found' };
  return { type: 200, message: sales };
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