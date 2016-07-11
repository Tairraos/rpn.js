/**
 * mocha unit test, install mocha first.
 * npm install -g mocha
 */
var assert = require('chai').assert;
var rpn = require('../rpn');

describe('Test rpnTools.js', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});
