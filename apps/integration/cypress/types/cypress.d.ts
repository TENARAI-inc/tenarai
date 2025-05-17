/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    visitAndWaitItems(path: string): void;
    noLoading(): void;
    login(): void;
    goToDetail(id?: number): void;
  }
}
