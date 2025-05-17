// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
  cy.get('.loader').should('not.exist');
  cy.get('header').contains('a', 'ログイン').click();
  cy.contains('dialog', 'ログイン').within(() => {
    cy.get('input[type="password"]').type('123');
    cy.contains('button', 'ログイン').click();
  });
  cy.contains('dialog', 'ログイン').should('not.exist');
});
Cypress.Commands.add('goToDetail', (id: number = 1) => {
  cy.get(`a[href="/items/${id}"]`).click();
  cy.url().should('include', `/items/${id}`);
  cy.get('h1').should('contain', `アイテム${id}`);
});
