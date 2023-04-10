//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
//let server = require('../server');
let server = 'http://localhost:3000';

chai.should();
chai.use(chaiHttp);

describe('Books API - All Test', () => {

        /*
  ** Test the GET route
  */
  describe('GET /init', () => {
          it('it should GET init database', (done) => {
                chai.request(server)
                .get('/init')
                .end((err, res) => {
                  res.should.have.status(200);
                });
 
              done();
          });
  });

        /*
  ** Test the GET route
  */
  describe('GET /add', () => {
          it('it should GET add the books', (done) => {
             for (let i = 0; i < 500; i++) {

                chai.request(server)
                .get('/add')
                .end((err, res) => {
                  res.should.have.status(200);
                  res.text.should.be.eq('Insert book successfully!');
                });
              }

              done();
          });
  });

       /*
  ** Test the GET route
  */
  describe('GET /', () => {
          it('it should GET all the books', (done) => {
                chai.request(server)
                .get('/')
                .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.json;
                        res.body.should.be.a('array');
                        //res.body.length.should.be.eql(0);
                done();
                });
          });
  });

/*
  ** Test the GET all the books
  */
  describe('GET /getAll', () => {
    it('it should GET all the books', (done) => {
          chai.request(server)
          .get('/getAll')
          .end((err, res) => {
                  res.should.have.status(200);
                  res.should.be.json;
                  res.body.should.be.a('array');
          done();
          });
    });
});

  /*
  ** Test the GET a books by book ID
  */
  describe('GET /get', () => {

    it('/get 404', (done) => {
        chai.request(server)
        .get('/get')
        .end((err, res) => {
                res.should.have.status(404);
        done();
        });
    });

    it.skip('/get/1 404 check', (done) => {
        chai.request(server)
        .get('/get/1')
        .end((err, res) => {
          res.should.have.status(404);       
        done();
        });
    });


    it.skip('/get/1000', (done) => {
        chai.request(server)
        .get('/get/1000')
        .end((err, res) => {
                res.should.have.status(404);
                res.text.should.be.eq('The book with the provided ID does not exists.');
        done();
        });
  });

    it.skip('/get/1000', (done) => {
          chai.request(server)
          .get('/get/1000')
          .end((err, res) => {
                  res.should.have.status(404);
                  res.text.should.be.eq('The book with the provided ID does not exists.');
          done();
          });
    });

    it('/get/14', (done) => {
        chai.request(server)
        .get('/get/14')
        .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
        done();
        });
  });    
});


/*
  * Test the /PUT route
  */
  describe('PUT /put/:id', () => {
  
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
               //console.log(res.body);

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


  describe('DELETE /delete/:id', () => {

    it('/delete/48', (done) => {
        chai.request(server)
        .get('/delete/48')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Book successfully deleted!');
        done();
        });
    });    

    it('/delete/38', (done) => {
        chai.request(server)
        .get('/delete/38')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Book successfully deleted!');
        done();
        });
    });  

});



        /*
  ** Test the GET route
  */
  describe('GET /drop', () => {
          it('it should GET drop the table', (done) => {
                chai.request(server)
                .get('/drop')
                .end((err, res) => {
                  res.should.have.status(200);
                });
 
              done();
          });
  });

});