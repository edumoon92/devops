var chai = require('chai'),
    expect = chai.expect;

describe('#indexOf()', function () {
    it('값이 일치하지 않는 경우 -1을 return 한다.', function () {
        expect([1, 2, 3].indexOf(5)).to.equal(-1);
        expect([1, 2, 3].indexOf(3)).to.equal(2);
        expect([1, 2, 3].indexOf(0)).to.equal(-1);
    });

    //비동기
    it('setTimeout', function (done) {
        setTimeout(function(){
            expect([1, 2, 3].indexOf(5)).to.equal(-1);
            expect([1, 2, 3].indexOf(3)).to.equal(2);
            expect([1, 2, 3].indexOf(0)).to.equal(-1);

            done();
        }, 1000);
    });
});