const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require('../../../src/models/product.model');
const productService = require('../../../src/services/product.service');
const { productsMock, idMocks } = require('../mock/products.mock');

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

  // describe('2.Testa a camada service para a função "getProductsById"', function () {
  //     it('Faz a busca de um produto pelo id', async function () {
  //       const result = idMocks;

  //       sinon.stub(productService, 'getProductsById')
  //         .resolves(idMocks);

  //       const response = await productService.getProductsById(1);

  //       expect(response).to.be.deep.equal(result);
  //     });
  // });

  // MSC do zero por Carolina Kauark:
  
  // describe('3.Testa a camada service para a função "insertProduct"', function () {
  //     it('Insere corretamente', async function () {
  //       const result = idMocks;

  //       sinon.stub(productService, 'insertProduct')
  //         .resolves(idMocks);

  //       const response = await productService.insertProduct(name);

  //       expect(response).to.be.deep.equal(result);
  //     });
  // });

});