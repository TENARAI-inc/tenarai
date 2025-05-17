/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    noLoading(): void;
    login(): void;
    goToDetail(id?: number): void;
  }
}
