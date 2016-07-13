var expect = require('chai').expect,
    rpn = require('../rpn');

describe('test _isNumber', function () {
    it('test operator', function () {
        expect(rpn._isNumber('1')).equal(true);
        expect(rpn._isNumber('0')).equal(true);
        expect(rpn._isNumber('123')).equal(true);
        expect(rpn._isNumber('1.5')).equal(true);
        expect(rpn._isNumber('0.5')).equal(true);
        expect(rpn._isNumber('-1')).equal(true);
        expect(rpn._isNumber('-0.5')).equal(true);
    });

    it('test invalid number and others', function () {
        expect(rpn._isNumber('+')).equal(false);
        expect(rpn._isNumber('-')).equal(false);
        expect(rpn._isNumber('.5')).equal(false);
        expect(rpn._isNumber('1..2')).equal(false);
        expect(rpn._isNumber('1+2')).equal(false);
        expect(rpn._isNumber('12.')).equal(false);
    });

});
