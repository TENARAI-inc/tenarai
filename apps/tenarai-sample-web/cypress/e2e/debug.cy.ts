describe('debug', () => {
  describe('render (no login)', { testIsolation: false }, () => {
    before(() => {
      cy.visit('/');
    });
    it('render header', () => {
      cy.get('header').within(() => {
        cy.contains('Tenarai Sample Web');
        cy.contains('a', 'トップ');
        cy.contains('a', 'ログイン');
      });
    });
  });
});
