(function () {
    'use strict';

    /**
     * operations
     * @private
     */
    var _operation = {
        '+': (b, a) => (+a) + (+b),
        '-': (b, a) => (+a) - (+b),
        '*': (b, a) => (+a) * (+b),
        '/': (b, a) => (+a) / (+b),
        '^': (n, x) => Math.pow(+x, +n),
        '!': function (n) {
            for (var i = 1, r = 1; i <= +n; i++) {
                r = r * i;
            }
            return (+n < 0) ? NaN : r;
        },
        '%': n => +n / 100,
        '√': n => Math.sqrt(+n)
    };

    /**
     * split expression to array
     * @private
     * @param exp - infix expression
     * @returns {Array|null}
     */
    function _splitExp(exp) {
        exp = exp.replace(/[a-zA-Z]/g, '').replace(/([\d%!])\-(\d√)/g, '$1 - $2').replace(/([+\-\*\/^])\-(\d)/g, '$1 -$2');
        return (/^[+*\/!^%]|\d\(|[\d\)]√|%[\d\(]|![\d\(]|%%|[+\-*\/^]{2,}|[+\-*\/√^]$/.test(exp)) ?
            null : exp.match(/(-?(?:\d+\.?\d*|-?\.\d*))|[()+\-*\/√!^%]/gi);
    }

    /**
     * check character, is or not a operator
     * @private
     * @param char - character
     * @returns {boolean}
     */
    function _isOperator(char) {
        return /^[√%!^\/\*\-\+#]$/.test(char);
    }

    /**
     * check character, is or not a unary operator
     * @private
     * @param char - character
     * @returns {boolean}
     */
    function _isUnaryOperator(char) {
        return /^[√%!]$/.test(char);
    }

    /**
     * check character, is or not a bracket
     * @private
     * @param char - character
     * @returns {boolean}
     */
    function _isBrackets(char) {
        return /^[\(\)]$/.test(char);
    }

    /**
     * check string, is or not a number
     * @private
     * @param str - character
     * @returns {boolean}
     */
    function _isNumber(str) {
        return /^-?\d+\.\d+$|^-?\d+$/.test(str);
    }

    /**
     * transfer infix expression to reverse polish notation
     * @param exp - infix expression
     * @returns {string|null}
     */
    function infix2rpn(exp) {
        var arrExp = _splitExp(exp),
            expStack = [], opStack = [], opItem, stackItem,
            precedence = {'√': 3, '%': 3, '!': 3, '^': 3, '/': 2, '*': 2, '-': 1, '+': 1, '#': 0};
        if (!arrExp) {
            return null;
        }
        arrExp = arrExp.concat('#');
        for (var looper = 0; looper < arrExp.length; looper++) {
            opItem = arrExp[looper];

            if (_isNumber(opItem)) {
                expStack.push(opItem);
            } else if (_isOperator(opItem)) {
                while (opStack.length) {
                    stackItem = opStack.pop();
                    if ((opItem === '√' && stackItem === '√' && precedence[stackItem] > precedence[opItem]) ||
                        ((opItem !== '√' || stackItem !== '√') && precedence[stackItem] >= precedence[opItem])) {
                        expStack.push(stackItem);
                    } else {
                        opStack.push(stackItem);
                        break;
                    }
                }
                opStack.push(opItem);
            } else if (_isBrackets(opItem)) {
                if (opItem === '(') {
                    opStack.push(opItem);
                } else {
                    while (opStack.length) {
                        stackItem = opStack.pop();
                        if (stackItem !== '(') {
                            expStack.push(stackItem);
                        } else {
                            break;
                        }
                    }
                }
            }
        }
        return expStack.length ? expStack.join(' ') : null;
    }

    /**
     * calculate reverse polish notation
     * @param exp - reverse polish notation
     * @returns {number}
     */
    function rpnCalculate(exp) {
        var arrExp = exp.split(' '), calcStack = [], opItem, param1, param2;

        for (var looper = 0; looper < arrExp.length; looper++) {
            opItem = arrExp[looper];
            if (_isNumber(opItem)) {
                calcStack.push(opItem);
            } else if (_isOperator(opItem)) {
                if (_isUnaryOperator(opItem)) {
                    calcStack.push(_operation[opItem](calcStack.pop()));
                } else {
                    calcStack.push(_operation[opItem](calcStack.pop(), calcStack.pop()));
                }
            }
        }
        return +calcStack.pop().toFixed(3);
    }

    /**
     * calculate expression
     * @param exp - expression string
     * @returns {number|null}
     */
    function calc(exp) {
        return rpn.rpnCalculate(rpn.infix2rpn(exp));
    }

    var rpn = {
        _operation: _operation,
        _splitExp: _splitExp,
        _isOperator: _isOperator,
        _isBrackets: _isBrackets,
        _isNumber: _isNumber,
        _isUnaryOperator: _isUnaryOperator,
        infix2rpn: infix2rpn,
        rpnCalculate: rpnCalculate,
        calculate: calc,
        calc: calc
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = rpn;
    }

    if (typeof window !== 'undefined') {
        window.rpn = rpn;
    }
}());
