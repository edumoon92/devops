suite('#Hooks', function(){
    suiteSetup(function(){
         // runs before all tests in this block            
    });
    
    suiteTeardown(function(){
         // runs after all tests in this block
    });
    
    setup(function() {
         // runs before each test in this block
    });
    
    teardown(function() {
         // runs after each test in this block
    });
    
    test('test', function(){
         // test case 
         console.log('TDD : test')
    });
 });