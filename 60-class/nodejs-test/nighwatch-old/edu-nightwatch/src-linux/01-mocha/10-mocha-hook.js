describe('#Hooks', function () {
    before(function () {
        console.log('before');
    });

    after(function () {
        console.log('after');
    });

    beforeEach(function () {
        console.log('beforeEach');
    });

    afterEach(function () {
        console.log('afterEach');
    });

    it('test case #1', function () {
        console.log('test case #1');
    });

    it('test case #2', function () {
        console.log('test case #2');
    })
});