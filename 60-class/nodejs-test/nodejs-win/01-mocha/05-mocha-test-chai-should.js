var chai = require('chai');
var should = chai.should();

describe('#Should Test', function () {
    it('should - Array', function () {
        var arr = [1, 2, 5, 3, 4];

        arr.should.have.lengthOf(5);                        //array length
        arr.should.be.not.empty;                            //empty
        arr.should.have.ordered.members([1, 2, 5, 3, 4]);   //arr === members
    });

    it('should - String', function () {
        var str = 'Awesome!!';

        str.should.be.a('String');                  //str type
        str.should.equal('Awesome!!');              //str === 'Awesome!!'
        str.should.have.lengthOf(7, 'Why fail?');   //Error
    });

    it('should - Object', function () {
        var obj = {
            assertion: ['assert', 'expect', 'should'],
            framework: 'mocha'
        };

        obj.should.have.property('assertion').with.lengthOf(3);     //assertion value length
        obj.should.have.all.keys('framework', 'assertion');         //obj key === keys
    });
});