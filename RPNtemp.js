'use strict';
let deep = 9,
    operation = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '!': function (n) {
            for (var i = 1, r = 1; i <= n; i++) {
                r = r * i;
            }
            return r;
        },
        '^': (x, n) => Math.pow(x, n),
        '%': n => n / 100,
        '√': n => Math.sqrt(n)
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
