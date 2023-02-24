const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require('../../../src/models/product.model');
const connection = require('../../../src/models/connection');
const {productsMock, idMocks, id} = require('../mock/products.mock');

describe('Testa a camada model para a rota "/product"', function () {
  afterEach(function () { sinon.restore() });

  describe('1.Testa a camada model para a função "getAll"', function () {
    it('Quando encontra todos os produtos cadastrados', async function () {
      sinon.stub(connection, 'execute').resolves([productsMock]);
      const response = await productModel.getAll();
      expect(response).to.be.deep.equal(productsMock);
    });
  });

  // TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator)) RESOLVIDO NO SLACK
  describe('2.Testa a camada model para a função "getProductsById"', function () {
    it('Faz a busca de um produto pelo id', async function () {
      sinon.stub(connection, 'execute').resolves([[productsMock]]);
      const response = await productModel.getById(id);
      expect(response).to.be.equal(idMocks);
      });
  });

  describe('3.Testa a camada model para a função "insertProduct"', function () {
    it('Quando insere corretamente', async function () {
   sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
      const response = await productModel.insertProduct('Lanterna');
      expect(response).to.be.deep.equal({ id: 4, name: 'Lanterna' });
      });
  });

  describe('4.Testa a camada model para a função "updateProduct"', function () {
    it('Quando atualiza corretamente', async function () {
   sinon.stub(connection, 'execute').resolves({ insertId: 3 });
      const response = await productModel.updateProduct('Lanterna');
      expect(response).to.be.deep.equal({ insertId: 3 });
      });
  });

});