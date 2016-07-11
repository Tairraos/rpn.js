'use strict';
let deep = 9,
    operation = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '^': (x, n) => Math.pow(x, n),
        '√': n => Math.sqrt(n),
        '!': function (n) {
            for (var i = 1, r = 1; i <= n; i++) {
                r = r * i;
            }
            return r;
        }
    };


/**
 *
 * @param {number} num - calculate result
 * @param {number} base - the base number
 * @returns {string}
 */
function parseNum(num, base) {
    var resolving = '';

    return resolving;
}

/**
 * calculate expression
 * @param {string} exp - expression
 * @returns {number} - calculate result
 */
function parseExp(exp) {
    var result = 0;

    return result;
}

function infix2RPN(expression) {
    var result = '',
        stack = [],
        operators = ['√', '!', '^', '*', '/', '+', '-'],
        precedence = {'(': 4, ')': 4, '√': 3, '!': 3, '^': 3, '*': 2, '/': 2, '+': 1, '-': 1},
        tokens = expression.match(/(-?(?:\d+\.?\d*|-?\.\d*))|[()+\-*\/√!^]/gi),
        item;

    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (operators.indexOf(token) > -1) {
            while (stack.length && operators.indexOf(stack[stack.length - 1]) > -1) {
                var operator = stack.pop();
                result += (' ' + operator);
            }

            stack.push(token);
        } else if (token === '(') {
            stack.push(token);
        } else if (token === ')') {
            item = stack.pop();

            while (item !== '(') {
                result += (' ' + item);
                item = stack.pop();
            }
        } else if (token) {
            result += (' ' + token);
        }
    }

    while (stack.length) {
        item = stack.pop();
        result += (' ' + item);
    }

    result = result.trim();

    return (result.length >= 1 ? result : null);
}

function calculateRPN(expression) {
    if (typeof expression !== 'string') {
        if (expression instanceof String) {
            expression = expression.toString();
        } else {
            return null;
        }
    }

    var result;
    var tokens = expression.split(/\s+/);
    var stack = [];
    var first;
    var second;
    var containsInvalidChars = /[^()+\-*/0-9.\s]/gi.test(expression);

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
