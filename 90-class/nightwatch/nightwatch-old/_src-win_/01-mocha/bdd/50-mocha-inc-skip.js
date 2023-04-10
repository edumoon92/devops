describe('#suite-master', function () {
    describe('#suite-#1', function () {
        it.skip('#suite-#1:test #1', function () {
            // this test will not be run
        });

        it('#suite-#1:test #2', function () {
            // this test will be run
        });
    });

    describe('#suite-#2', function () {
        describe.skip('#suite-#2.1', function () {
            it('#suite-#2.1: test #1', function () {
                // this test will not be run
            });
        });
    });

    it('test #1', function () {
        if (false) {
            // make assertions
        } else {
            this.skip();
        }
    });

});
