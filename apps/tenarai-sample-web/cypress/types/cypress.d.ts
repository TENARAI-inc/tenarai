/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login(): void;
    goToDetail(id?: number): void;
  }
}
