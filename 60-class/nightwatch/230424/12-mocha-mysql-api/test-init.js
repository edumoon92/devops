//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
//let server = require('../server');
let server = 'http://localhost:3000';

chai.should();
chai.use(chaiHttp);

describe('Books API Init Database', () => {

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

});