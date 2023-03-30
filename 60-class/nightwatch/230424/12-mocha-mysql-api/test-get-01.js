//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
//let server = require('../server');
let server = 'http://localhost:3000';

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

});