//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
//let server = require('../server');
let server = 'https://mocha.run.goorm.io/';

chai.should();
chai.use(chaiHttp);

describe('Books API', () => {

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
  ** Test the NOT GET route
  */
  describe('GET /book', () => {
          it('it should NOT GET all the books', (done) => {
                chai.request(server)
                .get('/book')
                .end((err, res) => {
                        res.should.have.status(404);
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
  describe('GET /get/1', () => {
          it('it should GET a book by book ID', (done) => {
                chai.request(server)
                .get('/get/1')
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


  /*
  ** Test the GET a books by book ID
  */
  describe('GET /get/14', () => {
          it('it should GET a book by book ID', (done) => {
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
  ** Test the GET a books by book ID
  */
  describe('GET /get/14', () => {
          it('it should GET a book by book ID', (done) => {
                const bookId = 14;
                chai.request(server)
                .get('/get/'+bookId)
                .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('array');
                        res.body.should.have.property('id');
                        res.body.should.have.property('title');
                        res.body.should.have.property('author');
                done();
                });
          });
  });

});