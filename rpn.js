(function () {
    'use strict';

    /**
     * operations
     * test/operation.js
     */
    var operation = {
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
     * @param exp - infix expression
     * @returns {Array|Null}
     */
    function splitExp(exp) {
        exp = exp.replace(/[a-zA-Z]/g, '').replace(/([\d%!])\-(\d√)/g, '$1 - $2').replace(/([+\-\*\/^])\-(\d)/g, '$1 -$2');
        return (/^[+*\/!^%]|\d\(|[\d\)]√|%[\d\(]|![\d\(]|%%|[+\-*\/^]{2,}|[+\-*\/√^]$/.test(exp)) ?
            null : exp.match(/(-?(?:\d+\.?\d*|-?\.\d*))|[()+\-*\/√!^%]/gi);
    }

    /**
     * check character, is or not a operator
     * @param char - character
     * @returns {boolean}
     */
    function isOperator(char) {
        return /^[√%!^\/\*\-\+#]$/.test(char);
    }

    /**
     * check character, is or not a unary operator
     * @param char - character
     * @returns {boolean}
     */
    function isUnaryOperator(char) {
        return /^[√%!]$/.test(char);
    }

    /**
     * check character, is or not a bracket
     * @param char - character
     * @returns {boolean}
     */
    function isBrackets(char) {
        return /^[\(\)]$/.test(char);
    }

    /**
     * check string, is or not a number
     * @param str - character
     * @returns {boolean}
     */
    function isNumber(str) {
        return /^-?\d+\.\d+$|^-?\d+$/.test(str);
    }

    /**
     * transfer infix expression to reverse polish notation
     * @param exp - infix expression
     * @returns {String|Null}
     */
    function infix2rpn(exp) {
        var arrExp = splitExp(exp),
            expStack = [], opStack = [], opItem, stackItem,
            precedence = {'√': 3, '%': 3, '!': 3, '^': 3, '/': 2, '*': 2, '-': 1, '+': 1, '#': 0};
        if (!arrExp) {
            return null;
        }
        arrExp = arrExp.concat('#');
        for (var looper = 0; looper < arrExp.length; looper++) {
            opItem = arrExp[looper];

            if (isNumber(opItem)) {
                expStack.push(opItem);
            } else if (isOperator(opItem)) {
                while (opStack.length) {
                    stackItem = opStack.pop();
                    if (stackItem !== opItem &&
                        precedence[stackItem] >= precedence[opItem]) {
                        expStack.push(stackItem);
                    } else {
                        opStack.push(stackItem);
                        break;
                    }
                }
                opStack.push(opItem);
            } else if (isBrackets(opItem)) {
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
            if (isNumber(opItem)) {
                calcStack.push(opItem);
            } else if (isOperator(opItem)) {
                if (isUnaryOperator(opItem)) {
                    calcStack.push(operation[opItem](calcStack.pop()));
                } else {
                    calcStack.push(operation[opItem](calcStack.pop(), calcStack.pop()));
                }
            }
        }
        return +calcStack.pop().toFixed(3);
    }

    var rpn = {
        operation: operation,
        splitExp: splitExp,
        infix2rpn: infix2rpn,
        rpnCalculate: rpnCalculate,
        isOperator: isOperator,
        isBrackets: isBrackets,
        isNumber: isNumber,
        isUnaryOperator: isUnaryOperator,
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = rpn;
    }

    if (typeof window !== 'undefined') {
        window.rpn = rpn;
    }
}());
