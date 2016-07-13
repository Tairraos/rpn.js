var expect = require('chai').expect,
    rpn = require('../rpn');

describe('test infix expression to reverse polish notation', function () {
    it('test infix2rpn', function () {
        expect(rpn.infix2rpn('1+2')).equal("1 2 +");
        expect(rpn.infix2rpn('1+2+3')).equal("1 2 + 3 +");
        expect(rpn.infix2rpn('1+2*3')).equal("1 2 3 * +");
        expect(rpn.infix2rpn('(1+2)*3')).equal("1 2 + 3 *");
        expect(rpn.infix2rpn('(1+2)*3!')).equal("1 2 + 3 ! *");
        expect(rpn.infix2rpn('1+√2*3!')).equal("1 2 √ 3 ! * +");
        expect(rpn.infix2rpn('1+√2!*3!')).equal("1 2 √ ! 3 ! * +");
        expect(rpn.infix2rpn('(1+2)*(3+4)')).equal("1 2 + 3 4 + *");
        expect(rpn.infix2rpn('(1+2)*(3+4)!')).equal("1 2 + 3 4 + ! *");
        expect(rpn.infix2rpn('√√√256')).equal("256 √ √ √");
        expect(rpn.infix2rpn('√√√256!')).equal("256 √ √ √ !");
    });
});
