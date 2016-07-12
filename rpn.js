(function () {
    'use strict';

    /**
     * operations
     * test/operation.js
     */
    var operation = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '!': function (n) {
            for (var i = 1, r = 1; i <= n; i++) {
                r = r * i;
            }
            return (n < 0) ? NaN : r;
        },
        '^': (x, n) => Math.pow(x, n),
        '%': n => n / 100,
        '√': n => Math.sqrt(n)
    };

    /**
     * split expression to array
     * @param exp - infix expression
     * @returns {Array|Null}
     */
    function splitExp(exp) {
        exp = exp.replace(/[a-zA-Z\s]/, '');
        return (/^[+*\/!^%]|\d√|%\d|!\d|%%|[+\-*\/^]{2,}|[+\-*\/√^]$/.test(exp)) ?
            null : exp.match(/(-?(?:\d+\.?\d*|-?\.\d*))|[()+\-*\/√!^%]/gi);
    }

    /**
     * check character, is or not a operator
     * @param char - character
     * @returns {boolean}
     */
    function isOperator(char) {
        return /^[√%!^\*\/+\-]$/.test(char);
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
            expStack = [], opStack = [], output = '',
            operators = /[√%!^\*\/+\-]/,
            precedence = {'(': 4, ')': 4, '√': 3, '%': 3, '!': 3, '^': 3, '*': 2, '/': 2, '+': 1, '-': 1},
            item;

        for (var i = 0; i < arrExp.length; i++) {
            var token = arrExp[i];
            if (isOperator(token)) {
                while (expStack.length && operators.indexOf(expStack[expStack.length - 1]) > -1) {
                    var operator = expStack.pop();
                    output += (' ' + operator);
                }

                expStack.push(token);
            } else if (token === '(') {
                expStack.push(token);
            } else if (token === ')') {
                item = expStack.pop();

                while (item !== '(') {
                    output += (' ' + item);
                    item = expStack.pop();
                }
            } else if (token) {
                output += (' ' + token);
            }
        }

        while (expStack.length) {
            item = expStack.pop();
            output += (' ' + item);
        }

        output = output.trim();

        return (output.length >= 1 ? output : null);
    }

    /**
     * calculate reverse polish notation
     * @param exp - reverse polish notation
     * @returns {number}
     */
    function rpnCalculate(exp) {
        if (typeof exp !== 'string') {
            if (exp instanceof String) {
                exp = exp.toString();
            } else {
                return null;
            }
        }

        var result;
        var tokens = exp.split(/\s+/);
        var stack = [];
        var first;
        var second;
        var containsInvalidChars = /[^()+\-*/0-9.\s]/gi.test(exp);

        if (containsInvalidChars) {
            return null;
        }

        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];

            if (token === '*') {
                second = stack.pop();
                first = stack.pop();

                if (typeof first === 'undefined') {
                    first = 1;
                }

                if (typeof second === 'undefined') {
                    second = 1;
                }

                stack.push(first * second);
            } else if (token === '/') {
                second = stack.pop();
                first = stack.pop();
                stack.push(first / second);
            } else if (token === '+') {
                second = stack.pop();
                first = stack.pop();
                stack.push(first + second);
            } else if (token === '-') {
                second = stack.pop();
                first = stack.pop();
                stack.push(first - second);
            } else {
                if (!isNaN(token)) {
                    stack.push(Number(token));
                }
            }
        }

        result = stack.pop();

        return result;
    }

    var rpn = {};
    rpn.operation = operation;
    rpn.splitExp = splitExp;
    rpn.infix2rpn = infix2rpn;
    rpn.rpnCalculate = rpnCalculate;
    rpn.isOperator = isOperator;
    rpn.isBrackets = isBrackets;
    rpn.isNumber = isNumber;


    if (typeof module !== 'undefined' && module.exports) {
        module.exports = rpn;
    }

    if (typeof window !== 'undefined') {
        window.rpn = rpn;
    }
}());
