var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('#Expect Test', function () {
    var arr = [1, 2, 5, 3, 4];

    it('expect - Array', function () {

        expect(arr).to.have.lengthOf(5);                        //array length
        expect(arr).to.be.not.empty;                            //empty

    });

    it('TC2 changed array', function () {

      //arr = [1, 3, 5, 3, 4];
      //expect(arr).to.have.ordered.members([1, 2, 5, 3, 4]);   //arr === members

    });


    it('TC2.1 changed array', function () {
        arr = [1, 2, 5, 3, 4];

        expect(arr).to.have.ordered.members([1, 2, 5, 3, 4]);   //arr === members
  
    });    


    it('TC2.2 changed array', function () {
        arr = [1, 3, 5, 3, 4];

        expect(arr).to.have.ordered.members([1, 2, 5, 3, 4]);   //arr === members
  
    });    


});
