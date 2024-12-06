const chai = require('chai'); // Importa chai
const chaiHttp = require('chai-http'); // Importa chai-http

chai.use(chaiHttp); // Aplica chai-http

describe('Chai HTTP Test', () => {
  it('Should verify that chai.request exists', () => {
    if (typeof chai.request !== 'function') {
      throw new Error('chai.request is not a function.');
    }
  });
});
