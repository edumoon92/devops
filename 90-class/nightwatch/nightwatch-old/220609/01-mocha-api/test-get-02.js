//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
//let server = require('../server');
let server = 'https://mocha.run.goorm.io';

chai.should();
chai.use(chaiHttp);

describe('Books API GET #2', () => {

  /*
  ** Test the GET all the books
  */
  describe.skip('GET /getAll', () => {
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
  ** Test the GET a books by book ID
  */
  describe('GET /get', () => {
  });

});