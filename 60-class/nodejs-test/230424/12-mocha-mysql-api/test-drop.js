//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
//let server = require('../server');
let server = 'http://localhost:3000';

chai.should();
chai.use(chaiHttp);

describe('Books API Drop Table', () => {

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