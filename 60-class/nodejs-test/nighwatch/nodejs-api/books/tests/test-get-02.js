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
  describe('GET /get/65', () => {
	it('it should GET a book by book ID', (done) => {
	  chai.request(server)
	  .get('/get/65')
	  .end((err, res) => {
		  res.should.have.status(200);
		  res.should.be.json;
		  res.body.should.be.a('array');
		  res.body.length.should.be.eql(1);			
	  done();
	  });
	});
	
});

	
});