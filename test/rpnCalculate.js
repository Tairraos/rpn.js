var expect = require('chai').expect,
    rpn = require('../rpn');

describe('test calculate reverse polish notation', function () {
    it('test rpnCalculate', function () {
        expect(rpn.rpnCalculate(rpn.infix2rpn('1+2'))).equal(3);
        expect(rpn.rpnCalculate(rpn.infix2rpn('1+2+3'))).equal(6);
        expect(rpn.rpnCalculate(rpn.infix2rpn('1+2*3'))).equal(7);
        expect(rpn.rpnCalculate(rpn.infix2rpn('(1+2)*3'))).equal(9);
        expect(rpn.rpnCalculate(rpn.infix2rpn('(1+2)*3!'))).equal(18);
        expect(rpn.rpnCalculate(rpn.infix2rpn('1+√4*3!'))).equal(13);
        expect(rpn.rpnCalculate(rpn.infix2rpn('1+√4!*3!'))).equal(13);
        expect(rpn.rpnCalculate(rpn.infix2rpn('(1+2)*(3+4)'))).equal(21);
        expect(rpn.rpnCalculate(rpn.infix2rpn('√√81'))).equal(3);
        expect(rpn.rpnCalculate(rpn.infix2rpn('√√81!'))).equal(6);
        expect(rpn.rpnCalculate(rpn.infix2rpn('√√81!!'))).equal(720);
        expect(rpn.rpnCalculate(rpn.infix2rpn('5-1'))).equal(4);
        expect(rpn.rpnCalculate(rpn.infix2rpn('5+ -2'))).equal(3);
        expect(rpn.rpnCalculate(rpn.infix2rpn('5--2'))).equal(7);
    });
});
