var chai = require('chai');
var expect = chai.expect;

it('expect - String', function () {
    var str = 'Awesome!!';
    
    expect(str).to.be.a('String');                  //str type
    expect(str).to.equal('Awesome!!');              //str === 'Awesome!!'
    expect(str).to.have.lengthOf(7, 'Why fail?');   //Error
});

it('expect - Object', function () {
    var obj = {
        assertion: ['assert', 'expect', 'should'],
        framework: 'mocha'
    };

    expect(obj).to.have.property('assertion').with.lengthOf(3);     //assertion value length
    expect(obj).to.have.all.keys('framework', 'assertion');         //obj key === keys
});