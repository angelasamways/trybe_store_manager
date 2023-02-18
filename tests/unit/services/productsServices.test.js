const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require('../../../src/models/product.model');
const productService = require('../../../src/services/product.service');
const { productsMock } = require('../mock/products.mock');

describe('Testa a camada service para a rota "/products"', function () {
  afterEach(function () { sinon.restore() });
  describe('Testa a camada service para a função "getProducts"', function () {
    it('Busca por todos os produtos cadastrados', async function () {
      const result = { type: null, message: productsMock }

      sinon.stub(productModel, 'getAll').resolves(productsMock);

      const response = await productService.getProducts();

      expect(response).to.be.deep.equal(result);
    });
  });

});