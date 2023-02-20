const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT sal.id AS saleId, sal.date, pro.product_id AS productId, pro.quantity 
  FROM StoreManager.sales_products AS pro LEFT JOIN StoreManager.sales AS sal 
  ON sal.id = pro.sale_id`;
  const [result] = await connection.execute(query);

  return result;
};

const getById = async (id) => {
  const query = `SELECT sal.date, sp.product_id AS productId, sp.quantity FROM 
  StoreManager.sales_products AS sp LEFT JOIN StoreManager.sales AS sal ON sal.id
  = sp.sale_id WHERE sal.id = ${id} ORDER BY sal.id, sp.product_id ASC`;
  const [result] = await connection.execute(query);
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