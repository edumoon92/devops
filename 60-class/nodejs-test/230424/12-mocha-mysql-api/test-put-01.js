//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
//let server = require('../server');

let server = 'http://localhost:3000';

chai.should();
chai.use(chaiHttp);

describe('Books API', () => {
  	
 /*
  * Test the /PUT route
  */
  describe('PUT', () => {
  
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

      it('should update a SINGLE Book on /put/<id> PUT', function(done) {
        chai.request(server)
          .get('/get/14')
          .end(function(err, res) {
               console.log(res.body);

                chai.request(server)
                .put('/put/'+res.body[0].id)
                .send({'title': 'Changed Title'})
                .end(function(err, res) {

                    console.log(res.body);


                    res.should.have.status(200);
                    res.should.be.json;
                    //res.body.should.be.a('object');
                    //res.body.should.have.property('UPDATED');
                    //res.body.UPDATED.should.be.a('object');
                    //res.body.UPDATED.should.have.property('name');
                    //res.body.UPDATED.should.have.property('_id');
                    //res.body.UPDATED.name.should.equal('Spider');
                
                    done();
                });

            });      

        }); // it

    });
	
});