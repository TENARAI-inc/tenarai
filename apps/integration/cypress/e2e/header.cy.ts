context('header', () => {
  describe('no login', () => {
    beforeEach(() => {
      cy.visitAndWaitItems('/');
      cy.noLoading();
    });
    describe('render', () => {
      it('render header', () => {
        cy.get('header').within(() => {
          cy.contains('Tenarai Sample Web');
          cy.contains('a', 'トップ');
          cy.contains('a', 'ログイン');
        });
      });
    });
    describe('action', () => {
      it('トップ', () => {
        cy.goToDetail();
        cy.contains('a', 'トップ').click();
        cy.location('pathname').should('eq', '/');
      });
    });
  });
  describe('with login', () => {
    beforeEach(() => {
      cy.visitAndWaitItems('/');
      cy.login();
    });
    describe('render', () => {
      it('render header', () => {
        cy.contains('a', 'トップ');
        cy.contains('a', 'ジョン・ドゥ').within(() => {
          cy.contains('span', '3');
        });
        cy.contains('a', 'カート').within(() => {
          cy.contains('span', '0');
        });
        cy.contains('a', 'ログイン').should('not.exist');
        cy.contains('a', 'ログアウト');
      });
    });
  });
});
