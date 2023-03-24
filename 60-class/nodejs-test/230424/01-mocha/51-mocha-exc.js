describe('#suite-master', function () {
  describe.only('#suite-#1', function () {
    it.only('#suite-#1:test #1', function () {
      // this test will be run
    });

    it('#suite-#1:test #2', function () {
      // this test will also be run
    });
  });

  describe.only('#suite-#2', function () {
    it('#suite-#2:test #1', function () {
      // this test will also be run
    });

    it.only('#suite-#2:test #2', function () {
      // this test will also be run
    });    
  });

  describe('#suite-#3', function () {
    it('#suite-#3:test #1', function () {
      // this test will not be run
    });
  });  
});