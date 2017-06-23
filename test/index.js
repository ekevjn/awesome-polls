process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET login', () => {
	it('It shoud land the login page', (done) => {
		chai.request(app)
			.get('/login')
			.end((err, res) => {
				res.should.have.status(200);
				done();
			});
	});
});