var assert = require('assert');

describe('TC1.1', function () {
    it('TC1.1 Step1', function () {
        var input = 'Hello World!'; // 입력 값이라고 가정

        assert.equal('Hello World!', input);
    });
    
    describe('TC1.1.1', function(){
        it('TC1.1.1 Step1', function(){
           var str = 'Hello';
           
           if (str.length == 5) {
               assert.ok(true);
           } else {
               assert.ok(false);
           }
        });
        
        it('TC1.1.1 Step2', function(){
           var str = 'World';
           
           if (str.indexOf('W') > -1) {     //오류 발생
               assert.ok(true);
           }else {
               assert.ok(false);
           }
        });
    })
});