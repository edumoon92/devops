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

});