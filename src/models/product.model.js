const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id ASC',
  );

  return result;
};

const getById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = (?)',
    [id],
  );

  return result;
};

const insertProduct = async (name) => {
  await connection.execute(
    'INSERT INTO StoreManager.products name VALUES (?)',
    [name],
  );
};

module.exports = {
  getAll,
  getById,
  insertProduct,
};