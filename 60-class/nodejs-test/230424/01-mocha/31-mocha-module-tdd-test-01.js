var chai = require('chai');
var Validate = require('./31-mocha-module-tdd');
var expect = chai.expect;
var assert = chai.assert;

suite('#Validation Check', function () {
    test('이메일의 형식을 검증한다.', function () {
        //given
        var validate = new Validate();

        //when
        var r1 = validate.email('test@naver.com');
        var r2 = validate.email('test_1234@naver.com');
        var r3 = validate.email('!@test@naver.com');
        var r4 = validate.email('test#naver.com');

        var r5 = validate.checkId('testId');

        //then
        assert.isTrue(r1, "assert true");
        expect(r2).to.be.true;
        expect(r3).to.be.false;
        expect(r4).to.be.false;

        expect(r5).to.be.true;

    });
});