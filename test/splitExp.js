var expect = require('chai').expect,
    rpn = require('../rpn');

describe('test operation', function () {
    it('test invalid expression', function () {
        expect(rpn.splitExp('+1')).deep.equal(null);
        expect(rpn.splitExp('*1')).deep.equal(null);
        expect(rpn.splitExp('/1')).deep.equal(null);
        expect(rpn.splitExp('^1')).deep.equal(null);
        expect(rpn.splitExp('!1')).deep.equal(null);
        expect(rpn.splitExp('^1')).deep.equal(null);
        expect(rpn.splitExp('%1')).deep.equal(null);
        expect(rpn.splitExp('1+')).deep.equal(null);
        expect(rpn.splitExp('1-')).deep.equal(null);
        expect(rpn.splitExp('1*')).deep.equal(null);
        expect(rpn.splitExp('1/')).deep.equal(null);
        expect(rpn.splitExp('1^')).deep.equal(null);
        expect(rpn.splitExp('1^')).deep.equal(null);
        expect(rpn.splitExp('1√')).deep.equal(null);
        expect(rpn.splitExp('1√1')).deep.equal(null);
        expect(rpn.splitExp('1%1')).deep.equal(null);
        expect(rpn.splitExp('1!1')).deep.equal(null);
        expect(rpn.splitExp('1√+1')).deep.equal(null);
        expect(rpn.splitExp('1+%1')).deep.equal(null);
        expect(rpn.splitExp('1%%1')).deep.equal(null);
        expect(rpn.splitExp('1!!1')).deep.equal(null);
        expect(rpn.splitExp('1+!1')).deep.equal(null);
        expect(rpn.splitExp('1^+2')).deep.equal(null);
        expect(rpn.splitExp('1++1')).deep.equal(null);
    });

    it('test split valid expression', function () {
        expect(rpn.splitExp('-1')).deep.equal(['-1']);
        expect(rpn.splitExp('√1')).deep.equal(['√', '1']);
        expect(rpn.splitExp('(1)')).deep.equal(['(', '1', ')']);
        expect(rpn.splitExp('1!')).deep.equal(['1', '!']);
        expect(rpn.splitExp('1^2')).deep.equal(['1', '^', '2']);
        expect(rpn.splitExp('1!!+1')).deep.equal(['1', '!', '!', '+', '1']);
        expect(rpn.splitExp('1+√1')).deep.equal(['1', '+', '√', '1']);
        expect(rpn.splitExp('1%+1')).deep.equal(['1', '%', '+', '1']);
        expect(rpn.splitExp('1!+1')).deep.equal(['1', '!', '+', '1']);
        expect(rpn.splitExp('1+1')).deep.equal(['1', '+', '1']);
        expect(rpn.splitExp('1+1*1')).deep.equal(['1', '+', '1', '*', '1']);
        expect(rpn.splitExp('1+(-1)')).deep.equal(['1', '+', '(', '-1', ')']);
        expect(rpn.splitExp('1 + -1')).deep.equal(['1', '+', '-1']);
    });
});
