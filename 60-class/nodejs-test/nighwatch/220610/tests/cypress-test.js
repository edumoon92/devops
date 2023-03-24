const url = 'https://example.cypress.io/commands/actions';

module.exports = {
    'TC 1.1 Cypress Site Test'(client) {
      client
        .url(url)
        
        .end();
    }
  };