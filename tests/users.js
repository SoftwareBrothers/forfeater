const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();
chai.use(chaiHttp);

describe('/GET users', () => {
  it('it should get all users', (done) => {
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});