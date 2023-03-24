var expect = chai.expect;

describe('#Array', function () {
    var arr;

    beforeEach(function () {
        arr = [1, 2, 3, 4];
    });

    afterEach(function () {
        arr = [];
    });

    it("array test", function () {
        expect(arr).to.be.an.instanceOf(Array);
        expect(arr).to.be.an('array').that.is.not.empty;
        expect(arr).to.be.that.includes(2);
        expect(arr).to.have.lengthOf(4);
    });

    it('array compare', function () {
        expect(arr).to.eql([1, 2, 3, 4]);
    });
    
    it('array member', function (done) {
        setTimeout(function () {
            expect(arr).to.have.members([4, 3, 2, 1]);
            done();
        }, 3000);
    });
    
});