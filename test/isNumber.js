var expect = require('chai').expect,
    rpn = require('../rpn');

describe('test isNumber', function () {
    it('test operator', function () {
        expect(rpn.isNumber('1')).equal(true);
        expect(rpn.isNumber('0')).equal(true);
        expect(rpn.isNumber('123')).equal(true);
        expect(rpn.isNumber('1.5')).equal(true);
        expect(rpn.isNumber('0.5')).equal(true);
        expect(rpn.isNumber('-1')).equal(true);
        expect(rpn.isNumber('-0.5')).equal(true);
    });

    it('test invalid number and others', function () {
        expect(rpn.isNumber('+')).equal(false);
        expect(rpn.isNumber('-')).equal(false);
        expect(rpn.isNumber('.5')).equal(false);
        expect(rpn.isNumber('1..2')).equal(false);
        expect(rpn.isNumber('1+2')).equal(false);
        expect(rpn.isNumber('12.')).equal(false);
    });

});
