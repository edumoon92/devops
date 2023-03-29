//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
//let server = require('../server');

let server = 'http://localhost:3000';

chai.should();
chai.use(chaiHttp);

describe('Books API', () => {
  	
 /*
  * Test the /POST route
  */
  describe('POST /post', () => {
	  it('it should not POST a book without pages field', (done) => {
	  	let book = {
	  		title: "The Lord of the Rings",
	  		author: "J.R.R. Tolkien"
	  	}
		chai.request(server)
		.post('/post')
		.send(book)
		.end((err, res) => {
			//console.log(res.body);
			
			res.should.have.status(200);
			res.body.should.be.a('object');
			res.body.should.have.property('errors');
			res.body.errors.should.have.property('pages');
			res.body.errors.pages.should.have.property('kind').eql('required');
		  done();
		});
	  });
	  
	  it('it should POST a book ', (done) => {
	  	let book = {
	  		title: "The Lord of the Rings",
	  		author: "J.R.R. Tolkien",
	  		year: 1954,
	  		pages: 1170
	  	}
		chai.request(server)
		.post('/post')
		.send(book)
		.end((err, res) => {
            //console.log(res.body);

			res.should.have.status(200);
			res.body.should.be.a('object');
			res.body.should.have.property('message').eql('Book successfully added!');
			res.body.book.should.have.property('title');
			res.body.book.should.have.property('author');
			res.body.book.should.have.property('pages');
			res.body.book.should.have.property('year');
		  done();
		});
	  });

  });
	
});