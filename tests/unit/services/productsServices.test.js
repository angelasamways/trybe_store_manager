const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require('../../../src/models/product.model');
const productService = require('../../../src/services/product.service');
const { productsMock, idMocks, id } = require('../mock/products.mock');

describe('Testa a camada service para a rota "/products"', function () {
  afterEach(function () { sinon.restore() });

  describe('1.Testa a camada service para a função "getProducts"', function () {
    it('Quando encontra todos os produtos cadastrados', async function () {
      const result = { type: null, message: productsMock }

      sinon.stub(productModel, 'getAll').resolves(productsMock);

      const response = await productService.getProducts();

      expect(response).to.be.deep.equal(result);
    });
  });

  describe('2.Testa a camada service para a função "getProductsById"', function () {
      it('Faz a busca de um produto pelo id', async function () {
        sinon.stub(productService, 'getProductsById')
          .resolves(productsMock);

        const response = await productService.getProductsById(id);

        expect(response).to.be.deep.equal(idMocks);
      });
  });

  describe('3.Testa a camada service para a função "insertProduct"', function () {
    it('Quando insere corretamente', async function () {
        
        sinon.stub(productModel, 'getById').resolves({ id: 6, name: 'Angela' });
        sinon.stub(productModel, 'insertProduct').resolves(6);
        const response = await productService.insertProduct('Angela');

        expect(response).to.be.deep.equal(6);
      });
  });

  describe('4.Testa a camada service para a função "updateProduct"', function () {
      it('Quando atualiza corretamente', async function () {
        sinon.stub(productService, 'updateProduct')
          .resolves(productsMock);

        const response = await productService.updateProduct(id);

        expect(response).to.be.deep.equal(idMocks);
      });
  });

});