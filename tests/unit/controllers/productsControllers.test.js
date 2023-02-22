const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');
chai.use(sinonChai);

const productController = require('../../../src/controllers/product.controller');
const productService = require('../../../src/services/product.service');
const { productsMock, idMocks } = require('../mock/products.mock');

describe('Testa a camada controller para a rota "/products"', function () {
  afterEach(function () { sinon.restore() });
  describe('1.Testa a camada controller para a função "getProducts"', function () {
    it('Quando encontra todos os produtos cadastrados', async function () {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(productService, 'getProducts')
        .resolves({ type: null, message: productsMock });

      await productController.getProducts(req, res);
      
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productsMock);
    });
  });
  describe('2.Testa a camada controller para a função "getProductsById"', function () {
      it('Quando o produto é encontrado', async function () {
        const req = { params: { id:1 } };
        const res = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon
          .stub(productService, 'getProductsById')
          .resolves({ idMocks });

        await productController.getProductsById(req, res);
        
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(idMocks);
      });
  });

});