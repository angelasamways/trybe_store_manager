const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require('../../../src/models/product.model');
const connection = require('../../../src/models/connection');
const { productsMock, idMocks, id } = require('../mock/products.mock');

describe('Testa a camada model para a rota "/product"', function () {
  afterEach(function () { sinon.restore() });
  describe('Testa a camada model para a função "getAll"', function () {
    it('Busca por todos os produtos cadastrados', async function () {
      sinon.stub(connection, 'execute').resolves([productsMock]);

      const response = await productModel.getAll();
      expect(response).to.be.deep.equal(productsMock);
    });
  });
  describe('Testa a camada model para a função "getProductsById"', function () {
      it('Faz a busca de um produto pelo id', async function () {
        sinon.stub(productModel, 'getById').resolves([id]);

        const response = await productModel.getById(1);
        expect(response.message).to.be.equal(id);
      });
    });

});