const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require('../../../src/models/product.model');
const connection = require('../../../src/models/connection');
const {productsMock, idMocks} = require('../mock/products.mock');

describe('Testa a camada model para a rota "/product"', function () {
  afterEach(function () { sinon.restore() });
  describe('1.Testa a camada model para a função "getAll"', function () {
    it('Quando encontra todos os produtos cadastrados', async function () {
      sinon.stub(connection, 'execute').resolves([productsMock]);
      const response = await productModel.getAll();
      expect(response).to.be.deep.equal(productsMock);
    });
  });

  // describe('2.Testa a camada model para a função "getProductsById"', function () {
  //   it('Quando o produto é encontrado', async function () {
  //     sinon.stub(connection, 'execute').resolves(idMocks);
  //     const response = await productModel.getById([1]);  
  //     expect(response).to.be.deep.equal(idMocks);      
  //     });
  // });
  
  // describe('3.Testa a camada model para a função "insertProduct"', function () {
  //     it('Insere corretamente', async function () {
  //       
  //     });
  //   });
  
});