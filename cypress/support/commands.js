Cypress.Commands.add('postLivro', (livro) => {
  cy.api({
    url: 'http://localhost:5000/api/livros',
    method: 'POST',
    body: livro,
    failOnStatusCode: false // This will prevent Cypress from failing the test on a non-2xx status code
  }).then((response) => {
    return response;
  });
})