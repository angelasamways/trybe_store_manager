const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT sal.id AS saleId, sal.date, pro.product_id AS productId, pro.quantity FROM StoreManager.sales_products AS pro LEFT JOIN StoreManager.sales AS sal ON sal.id = pro.sale_id',
  );

  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute(
    'SELECT sal.date, sp.product_id AS productId, sp.quantity FROM StoreManager.sales_products AS sp LEFT JOIN StoreManager.sales AS sal ON sal.id = sp.sale_id WHERE sal.id = (id) ORDER BY sal.id, sp.product_id ASC', [id],
  );
  console.log('Model');
  console.log(result);
  return result;
};

// const insertSale = async (name) => {
//   const [insert] = await connection.execute(
//     'INSERT INTO StoreManager.sales (name) VALUES (?)',
//     [name],
//   );
//   return { id: insert.saleId, name };
// };

module.exports = {
  getAll,
  getById,
  // insertSale,
};