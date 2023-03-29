var chai = require('chai');
var expect = chai.expect;


it('expect - String', function () {
    var str = 'Awesome!!';
    
    expect(str).to.be.a('String');                  //str type
    expect(str).to.equal('Awesome!!');              //str === 'Awesome!!'
    expect(str).to.have.lengthOf(7, 'Why fail?');   //Error
});
