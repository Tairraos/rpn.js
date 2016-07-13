var expect = require('chai').expect,
    rpn = require('../rpn');

describe('test isBracket', function () {
    it('test bracket', function () {
        expect(rpn._isBrackets('(')).equal(true);
        expect(rpn._isBrackets(')')).equal(true);
    });

    it('test invalid bracket and others', function () {
        expect(rpn._isBrackets('()')).equal(false);
        expect(rpn._isBrackets(')(')).equal(false);
        expect(rpn._isBrackets('1')).equal(false);
        expect(rpn._isBrackets('1.2')).equal(false);
        expect(rpn._isBrackets('+')).equal(false);
    });

});
