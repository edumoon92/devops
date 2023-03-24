describe('#Describing Hooks', function () {
    beforeEach(function() {
        // beforeEach hook
        console.log('beforeEach')
    });

    beforeEach(function namedFun() {
        // beforeEach:namedFun
        console.log('beforeEach namedFun')
    });

    beforeEach('some description', function() {
        // beforeEach:some description
        error
    });

    it('test case #1', function () {
        console.log('test case #1');
    });

    it('test case #2', function () {
        console.log('test case #2');
        error
    })

});