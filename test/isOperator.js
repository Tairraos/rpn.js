var expect = require('chai').expect,
    rpn = require('../rpn');

describe('test _isOperator', function () {
    it('test operator', function () {
        expect(rpn._isOperator('+')).equal(true);
        expect(rpn._isOperator('-')).equal(true);
        expect(rpn._isOperator('*')).equal(true);
        expect(rpn._isOperator('/')).equal(true);
        expect(rpn._isOperator('^')).equal(true);
        expect(rpn._isOperator('!')).equal(true);
        expect(rpn._isOperator('%')).equal(true);
        expect(rpn._isOperator('√')).equal(true);
        expect(rpn._isOperator('#')).equal(true);
    });

    it('test number, bracket and invalid operator', function () {
        expect(rpn._isOperator('(')).equal(false);
        expect(rpn._isOperator(')')).equal(false);
        expect(rpn._isOperator('123')).equal(false);
        expect(rpn._isOperator('1.2')).equal(false);
        expect(rpn._isOperator('.')).equal(false);
        expect(rpn._isOperator('++')).equal(false);
        expect(rpn._isOperator('+%')).equal(false);
    });

    it('test unary operator', function () {
        expect(rpn._isUnaryOperator('+')).equal(false);
        expect(rpn._isUnaryOperator('-')).equal(false);
        expect(rpn._isUnaryOperator('*')).equal(false);
        expect(rpn._isUnaryOperator('/')).equal(false);
        expect(rpn._isUnaryOperator('^')).equal(false);
        expect(rpn._isUnaryOperator('!')).equal(true);
        expect(rpn._isUnaryOperator('%')).equal(true);
        expect(rpn._isUnaryOperator('√')).equal(true);
    });

});
