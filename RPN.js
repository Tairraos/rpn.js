(function () {
    'use strict';

    /**
     * split expression to array
     * @param exp - infix expression
     * @returns {Array|Null}
     */
    function splitExp(exp) {
        exp = exp.replace(/[a-zA-Z\s]/, '');
        return (/^[+*\/!^%]|[+\-*\/^%]{2,}|[+\-*\/√^]$/.test(exp)) &&
            exp.match(/(-?(?:\d+\.?\d*|-?\.\d*))|[()+\-*\/√!^%]/gi);
    }

    /**
     * transfer infix expression to reverse polish notation
     * @param exp - infix expression
     * @returns {String|Null}
     */
    function infix2rpn(exp) {
        var arrExp = splitExp(exp),
            stack1 = [], stack2 = [], output = '',
            operators = ['√', '%', '!', '^', '*', '/', '+', '-'],
            precedence = {'(': 4, ')': 4, '√': 3, '%': 3, '!': 3, '^': 3, '*': 2, '/': 2, '+': 1, '-': 1},
            item;

        for (var i = 0; i < arrExp.length; i++) {
            var token = arrExp[i];
            if (operators.indexOf(token) > -1) {
                while (stack1.length && operators.indexOf(stack1[stack1.length - 1]) > -1) {
                    var operator = stack1.pop();
                    output += (' ' + operator);
                }

                stack1.push(token);
            } else if (token === '(') {
                stack1.push(token);
            } else if (token === ')') {
                item = stack1.pop();

                while (item !== '(') {
                    output += (' ' + item);
                    item = stack1.pop();
                }
            } else if (token) {
                output += (' ' + token);
            }
        }

        while (stack1.length) {
            item = stack1.pop();
            output += (' ' + item);
        }

        output = output.trim();

        return (output.length >= 1 ? output : null);
    }

    var rpn = {};
    rpn.infix2rpn = infix2rpn;
    rpn.splitExp = splitExp;

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = rpn;
    }

    if (typeof window !== 'undefined') {
        window.rpn = rpn;
    }
}());
