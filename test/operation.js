var expect = require('chai').expect,
    rpn = require('../rpn');

describe('test operation', function () {
    it('test "+" operator', function () {
        expect(rpn.operation['+'](0)).deep.equal(NaN);
        expect(rpn.operation['+'](0, 1)).equal(1);
        expect(rpn.operation['+'](0, -1)).equal(-1);
        expect(rpn.operation['+'](1, 2)).equal(3);
        expect(rpn.operation['+'](-1, 2)).equal(1);
        expect(rpn.operation['+']('3', '2')).equal(5);
    });

    it('test "-" operator', function () {
        expect(rpn.operation['-'](0)).deep.equal(NaN);
        expect(rpn.operation['-'](0, 1)).equal(-1);
        expect(rpn.operation['-'](0, -1)).equal(1);
        expect(rpn.operation['-'](1, 2)).equal(-1);
        expect(rpn.operation['-'](2, 1)).equal(1);
        expect(rpn.operation['-']('3', '2')).equal(1);
    });

    it('test "*" operator', function () {
        expect(rpn.operation['*'](0)).deep.equal(NaN);
        expect(rpn.operation['*'](0, 1)).equal(0);
        expect(rpn.operation['*'](0, -1)).equal(0);
        expect(rpn.operation['*'](1, 2)).equal(2);
        expect(rpn.operation['*'](-1, 2)).equal(-2);
        expect(rpn.operation['*']('3', '2')).equal(6);
    });

    it('test "/" operator', function () {
        expect(rpn.operation['/'](0)).deep.equal(NaN);
        expect(rpn.operation['/'](0, 1)).deep.equal(Infinity);
        expect(rpn.operation['/'](1, 0)).equal(0);
        expect(rpn.operation['/'](2, 1)).equal(0.5);
        expect(rpn.operation['/'](2, -1)).equal(-0.5);
        expect(rpn.operation['/']('2', '3')).equal(1.5);
    });

    it('test "!" operator', function () {
        expect(rpn.operation['!'](0)).equal(1);
        expect(rpn.operation['!'](1)).equal(1);
        expect(rpn.operation['!'](3)).equal(6);
        expect(rpn.operation['!'](-1)).deep.equal(NaN);
        expect(rpn.operation['!']('3')).equal(6);
    });

    it('test "^" operator', function () {
        expect(rpn.operation['^'](0)).deep.equal(NaN);
        expect(rpn.operation['^'](0, -1)).deep.equal(Infinity);
        expect(rpn.operation['^'](0, 2)).equal(0);
        expect(rpn.operation['^'](2, 3)).equal(8);
        expect(rpn.operation['^'](-1, 2)).equal(1);
        expect(rpn.operation['^'](5, -1)).equal(0.2);
        expect(rpn.operation['^'](5, -2)).equal(0.04);
        expect(rpn.operation['^']('3', '2')).equal(9);
    });

    it('test "%" operator', function () {
        expect(rpn.operation['%'](0)).equal(0);
        expect(rpn.operation['%'](10)).equal(0.1);
        expect(rpn.operation['%'](200)).equal(2);
        expect(rpn.operation['%'](250)).equal(2.5);
        expect(rpn.operation['%'](-1)).equal(-0.01);
        expect(rpn.operation['%']('3')).equal(0.03);
    });

    it('test "√" operator', function () {
        expect(rpn.operation['√'](0)).equal(0);
        expect(rpn.operation['√'](-1)).deep.equal(NaN);
        expect(rpn.operation['√'](4)).equal(2);
        expect(rpn.operation['√'](5)).equal(2.23606797749979);
        expect(rpn.operation['√']('16')).equal(4);
    });
});
