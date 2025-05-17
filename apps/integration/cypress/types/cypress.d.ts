/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    goToTop(): void;
    noLoading(): void;
    login(): void;
    goToDetail(id?: number): void;
  }
}
