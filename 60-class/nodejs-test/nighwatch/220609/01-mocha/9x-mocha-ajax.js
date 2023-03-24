

var myajax = require('./9x-mocha-myajax')
var chai = require('chai')

chai.should();
 
describe('MyAjax', function() {
 
  //Tests etc. go here
  it('should parse the fetched response data as JSON', function(done) {
    var data = { foo: 'bar' };
    var dataJson = JSON.stringify(data);
   
    myajax.get(function(err, result) {
      result.should.deep.equal(data);
      done();
    });
   
    this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
  });

});
