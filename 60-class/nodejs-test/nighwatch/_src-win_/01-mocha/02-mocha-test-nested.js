var assert = require('assert');

describe('#Hello World!', function () {
    it('입력 값은 Hello World!', function () {
        var input = 'Hello World!'; // 입력 값이라고 가정

        assert.equal('Hello World!', input);
    });
    
    describe('#String Test', function(){
        it('Hello의 문자 개수는 5', function(){
           var str = 'Hello';
           
           if (str.length == 5) {
               assert.ok(true);
           } else {
               assert.ok(false);
           }
        });
        
        it('World는 W 대문자', function(){
           var str = 'World';
           
           if (str.indexOf('w') > -1) {     //오류 발생
               assert.ok(true);
           }else {
               assert.ok(false);
           }
        });
    })
});