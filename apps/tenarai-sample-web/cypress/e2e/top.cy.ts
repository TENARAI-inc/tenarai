context('top', () => {
  describe('no login', () => {
    describe('render', { testIsolation: false }, () => {
      before(() => {
        cy.visit('/');
      });
      it('items', () => {
        cy.contains('h1', 'Tenarai Sample Web');
        cy.contains('Welcome to the Tenarai Sample Web!');
        cy.get('.ItemList > ul > li').should('have.length.at.least', 100);
      });
      it('お知らせ', () => {
        cy.contains('h2', 'お知らせ');
      });
      it('footer', () => {
        cy.contains('a', 'プライバシーポリシー');
        cy.contains('a', 'お問い合わせ');
      });
    });
    describe('action', () => {
      before(() => {
        cy.visit('/');
      });
      it('go to detail', () => {
        cy.goToDetail();
      });
    });
  });
  describe('with login', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.login();
    });
    describe('render', () => {
      it('items', () => {
        cy.get('.ItemList > ul > li').should('have.length.gt', 0);
      });
    });
    describe('action', () => {
      it('go to detail', () => {
        cy.goToDetail();
      });
    });
  });
});
