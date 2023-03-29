//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
//let server = require('../server');
let server = 'https://mocha.run.goorm.io';

chai.should();
chai.use(chaiHttp);

describe('Books API #1', () => {

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

          it('it should NOT GET all the books', (done) => {
                    chai.request(server)
                    .get('/book')
                    .end((err, res) => {
                            res.should.have.status(200);
                    done();
                    });
            });

  });  


});