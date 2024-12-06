import * as chai from 'chai'; // Importa todo el módulo chai como un objeto
import chaiHttp from 'chai-http';
import app from '../server.js';

const { expect } = chai; // Extrae 'expect' de chai
chai.use(chaiHttp);

describe('API Tests', () => {
  it('Should return Hello, World!', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        if (err) {
          console.error('Error during request:', err);
          done(err); // Muestra el error si falla
        }
        expect(res.body).to.have.property('message', 'Hello, World!');
        done();
      });
  });
});