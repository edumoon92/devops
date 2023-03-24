//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
//let server = require('../server');
let server = 'https://www.google.com/';

chai.should();
chai.use(chaiHttp);

describe('Books API', () => {

	/*
  ** Test the GET route
  */
  describe('GET /', () => {
	  it('get Google Home data', (done) => {
		chai.request(server)
		.get('/')
		.end((err, res) => {
			
			console.log(res);

			//res.should.have.status(200);
			//res.should.be.json;
			//res.body.should.be.a('array');
			//res.body.length.should.be.eql(0);
		done();
		});
	  });
  });

	
});