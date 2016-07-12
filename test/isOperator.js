var expect = require('chai').expect,
    rpn = require('../rpn');

describe('test isOperator', function () {
    it('test operator', function () {
        expect(rpn.isOperator('+')).equal(true);
        expect(rpn.isOperator('-')).equal(true);
        expect(rpn.isOperator('*')).equal(true);
        expect(rpn.isOperator('/')).equal(true);
        expect(rpn.isOperator('^')).equal(true);
        expect(rpn.isOperator('!')).equal(true);
        expect(rpn.isOperator('%')).equal(true);
        expect(rpn.isOperator('√')).equal(true);
        expect(rpn.isOperator('#')).equal(true);
    });

    it('test number, bracket and invalid operator', function () {
        expect(rpn.isOperator('(')).equal(false);
        expect(rpn.isOperator(')')).equal(false);
        expect(rpn.isOperator('123')).equal(false);
        expect(rpn.isOperator('1.2')).equal(false);
        expect(rpn.isOperator('.')).equal(false);
        expect(rpn.isOperator('++')).equal(false);
        expect(rpn.isOperator('+%')).equal(false);
    });

    it('test unary operator', function () {
        expect(rpn.isUnaryOperator('+')).equal(false);
        expect(rpn.isUnaryOperator('-')).equal(false);
        expect(rpn.isUnaryOperator('*')).equal(false);
        expect(rpn.isUnaryOperator('/')).equal(false);
        expect(rpn.isUnaryOperator('^')).equal(false);
        expect(rpn.isUnaryOperator('!')).equal(true);
        expect(rpn.isUnaryOperator('%')).equal(true);
        expect(rpn.isUnaryOperator('√')).equal(true);
    });

});
