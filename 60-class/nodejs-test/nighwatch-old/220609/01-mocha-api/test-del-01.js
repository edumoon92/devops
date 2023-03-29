//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
//let server = require('../server');
let server = 'https://mocha.run.goorm.io';

chai.should();
chai.use(chaiHttp);

describe('Books API #1', () => {

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
