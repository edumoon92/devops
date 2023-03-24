//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
//let server = require('../server');
let server = 'https://mocha.run.goorm.io/';

chai.should();
chai.use(chaiHttp);

describe('Books API', () => {

 /*
  ** Test the GET a books by book ID
  */
  describe('GET /get/1000', () => {
	it('it should GET a book by book ID', (done) => {
	  chai.request(server)
	  .get('/get/1000')
	  .end((err, res) => {
		  res.should.have.status(404);
		  res.text.should.be.eq('The book with the provided ID does not exists.');			
	  done();
	  });
	});
	
});

	
});