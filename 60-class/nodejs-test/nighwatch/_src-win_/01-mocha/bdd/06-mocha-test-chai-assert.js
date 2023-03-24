var chai = require('chai');
var assert = chai.assert;

describe('#Assert Test', function () {
    it('assert - Array', function () {
        var str = 'Awesome!!';
        var obj = {
            assertion: ['assert', 'expect', 'should'],
            framework: 'mocha'
        };

        assert.equal(str, 'Awesome!!');         //str === 'Awesome!!'
        assert.typeOf(str, 'String');           //str type
        assert.lengthOf(obj.assertion, 3);      //assertion value length
    });
});