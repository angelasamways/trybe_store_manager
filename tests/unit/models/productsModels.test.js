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

  describe('2.Testa a camada model para a função "getProductsById"', function () {
    it('Quando o produto é encontrado', async function () {
      sinon.stub(connection, 'execute').resolves([productsMock]);
      const response = await productModel.getById(1);
      expect(response).to.be.deep.equal(productsMock);
      });
  });
  

  // MSC do zero por Carolina Kauark:
  
  // describe('3.Testa a camada model para a função "insertProduct"', function () {
  //     it('Insere corretamente', async function () {
  //
  //     });
  //   });
  
  
  // describe('Testa a camada model para a função "getById"', function () {
  //   it('Faz a busca de uma pessoa pelo id', async function () {
  //     sinon.stub(connection, 'execute').resolves([person]);

  //     const response = await personModel.getById(id);
  //     expect(response).to.be.equal(person);
  //   });
  // });

  
  // describe('Testa a camada model para a função "insertPerson"', function () {
  //   it('Faz a inserção de uma nova pessoa', async function () {
  //     sinon.stub(connection, 'execute').resolves();

  //     const response = await personModel.insertPerson(person);
  //     expect(response).to.be.equal(undefined);
  //   });
  // });

  // describe('Testa a camada model para a função "updateById"', function () {
  //   it('Faz a atualização de uma nova pessoa pelo id', async function () {
  //     sinon.stub(connection, 'execute').resolves();

  //     const response = await personModel.updateById(id, person);
  //     expect(response).to.be.equal(undefined);
  //   });
  // });


});